"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSVScannerCommand = void 0;
const tslib_1 = require("tslib");
const web3_provider_1 = tslib_1.__importDefault(require("../lib/web3.provider"));
class SSVScannerCommand {
    constructor(params_) {
        this.DAY = 5400;
        this.WEEK = this.DAY * 7;
        this.MONTH = this.DAY * 30;
        this.eventsList = [
            'ClusterDeposit',
            'ClusterWithdrawn',
            'ValidatorRemoved',
            'ValidatorAdded',
            'ClusterLiquidated',
            'ClusterReactivated',
        ];
        this.params = params_;
    }
    execute() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const cluster = yield this.getClusterSnapshot(this.MONTH, yield web3_provider_1.default.web3(this.params.nodeUrl).eth.getBlockNumber());
            return JSON.stringify(cluster);
        });
    }
    getClusterSnapshot(range, toBlock) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const filters = {
                fromBlock: toBlock - range,
                toBlock,
                filter: {
                    owner: this.params.ownerAddress,
                }
            };
            let result = [];
            try {
                // console.log("???", filters.fromBlock, filters.toBlock);
                if (filters.fromBlock <= 0)
                    return null;
                result = yield web3_provider_1.default.contract(this.params.nodeUrl, this.params.contractAddress).getPastEvents('allEvents', filters);
            }
            catch (e) {
                console.error(e);
                let step;
                if (range === this.MONTH) {
                    step = this.WEEK;
                }
                else if (range === this.WEEK) {
                    step = this.DAY;
                }
                result = yield this.getClusterSnapshot(step, toBlock);
            }
            let clusterSnapshot = null;
            let biggestBlockNumber = 0;
            result
                .filter((item) => this.eventsList.includes(item.event))
                .filter((item) => JSON.stringify(item.returnValues.operatorIds.map((value) => +value)) === JSON.stringify(this.params.operatorIds))
                .forEach((item) => {
                if (item.blockNumber > biggestBlockNumber) {
                    biggestBlockNumber = item.blockNumber;
                    clusterSnapshot = item.returnValues.cluster;
                }
            });
            if (!clusterSnapshot) {
                return yield this.getClusterSnapshot(this.MONTH, toBlock - range);
            }
            return clusterSnapshot;
        });
    }
}
exports.SSVScannerCommand = SSVScannerCommand;
//# sourceMappingURL=SSVScannerCommand.js.map