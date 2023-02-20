"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSVScannerCommand = void 0;
const tslib_1 = require("tslib");
const cli_progress_1 = tslib_1.__importDefault(require("cli-progress"));
const web3_provider_1 = tslib_1.__importDefault(require("../lib/web3.provider"));
class SSVScannerCommand {
    constructor(params_) {
        this.DAY = 5400;
        this.WEEK = this.DAY * 7;
        this.MONTH = this.DAY * 30;
        this.eventsList = [
            'ClusterDeposited',
            'ClusterWithdrawn',
            'ValidatorRemoved',
            'ValidatorAdded',
            'ClusterLiquidated',
            'ClusterReactivated',
        ];
        if (!params_.contractAddress)
            throw Error('Contract address is required');
        if (!params_.nodeUrl)
            throw Error('ETH1 node is required');
        if (!Array.isArray(params_.operatorIds) || !this.isValidOperatorIds(params_.operatorIds.length))
            throw Error('Invalid operators amount. Enter an 3f+1 compatible amount of operators.');
        if (!params_.ownerAddress)
            throw Error('Cluster owner address is required');
        if (params_.contractAddress.length !== 42)
            throw Error('Invalid contract address length');
        if (!params_.contractAddress.startsWith('0x'))
            throw Error('Invalid contract address');
        if (params_.ownerAddress.length !== 42)
            throw Error('Invalid owner address length');
        if (!params_.ownerAddress.startsWith('0x'))
            throw Error('Invalid owner address');
        this.params = params_;
    }
    scan() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.getClusterSnapshot(false);
        });
    }
    execute() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('\nScanning blockchain...');
            this.progressBar = new cli_progress_1.default.SingleBar({}, cli_progress_1.default.Presets.shades_classic);
            const data = yield this.getClusterSnapshot(true);
            this.progressBar.stop();
            return data;
        });
    }
    getClusterSnapshot(cli) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let latestBlockNumber;
            try { latestBlockNumber = yield web3_provider_1.default.web3(this.params.nodeUrl).eth.getBlockNumber() }
            catch (err) { throw new Error('Could not access the provided node endpoint.') };
            let step = this.MONTH;
            let clusterSnapshot;
            let biggestBlockNumber = 0;
            const filters = {
                fromBlock: latestBlockNumber - step,
                toBlock: latestBlockNumber,
                filter: {
                    owner: this.params.ownerAddress,
                }
            };
            cli && this.progressBar.start(latestBlockNumber, 0);
            while (!clusterSnapshot && filters.fromBlock > 0) {
                let result;
                try {
                    result = yield web3_provider_1.default.contract(this.params.nodeUrl, this.params.contractAddress).getPastEvents('allEvents', filters);
                    result
                        .filter((item) => this.eventsList.includes(item.event))
                        .filter((item) => JSON.stringify(item.returnValues.operatorIds.map((value) => +value)) === JSON.stringify(this.params.operatorIds))
                        .forEach((item) => {
                            if (item.blockNumber > biggestBlockNumber) {
                                biggestBlockNumber = item.blockNumber;
                                clusterSnapshot = item.returnValues.cluster;
                            }
                        });
                    filters.toBlock = filters.fromBlock;
                }
                catch (e) {
                    console.error(e);
                    if (step === this.MONTH) {
                        step = this.WEEK;
                    }
                    else if (step === this.WEEK) {
                        step = this.DAY;
                    }
                }
                filters.fromBlock = filters.toBlock - step;
                cli && this.progressBar.update(latestBlockNumber - (filters.toBlock - step));
            }
            clusterSnapshot = clusterSnapshot || ['0', '0', '0', '0', '0', false];
            return {
                payload: {
                    'Owner': this.params.ownerAddress,
                    'Operators': this.params.operatorIds.join(','),
                    'Block': biggestBlockNumber || latestBlockNumber,
                    'Data': clusterSnapshot.join(','),
                },
                cluster: {
                    validatorCount: clusterSnapshot[0],
                    networkFee: clusterSnapshot[1],
                    networkFeeIndex: clusterSnapshot[2],
                    index: clusterSnapshot[3],
                    balance: clusterSnapshot[4],
                    disabled: clusterSnapshot[5],
                }
            };
        });
    }
    isValidOperatorIds(operatorsLength) {
        return (operatorsLength < 4 || operatorsLength > 13 || operatorsLength % 3 != 1) ? false : true;
    }
}
exports.SSVScannerCommand = SSVScannerCommand;
//# sourceMappingURL=SSVScannerCommand.js.map