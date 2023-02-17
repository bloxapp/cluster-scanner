"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const figlet_1 = tslib_1.__importDefault(require("figlet"));
const package_json_1 = tslib_1.__importDefault(require("../package.json"));
const argparse_1 = require("argparse");
const SSVScannerCommand_1 = require("./commands/SSVScannerCommand");
const FigletMessage = (message) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    return new Promise(resolve => {
        (0, figlet_1.default)(message, (error, output) => {
            if (error) {
                return resolve('');
            }
            resolve(output);
        });
    });
});
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const parser = new argparse_1.ArgumentParser();
        parser.add_argument('-n', '--node-url', {
            help: `ETH1 (execution client) node endpoint url`,
            required: true,
            dest: 'nodeUrl'
        });
        parser.add_argument('-ca', '--ssv-contract-address', {
            help: 'SSV contract address - see https://docs.ssv.network/developers/smart-contracts' +
                'Refer to https://docs.ssv.network/developers/smart-contracts',
            required: true,
            dest: 'contractAddress'
        });
        parser.add_argument('-oa', '--owner-address', {
            help: "The cluster owner address (in the SSV contract)",
            required: true,
            dest: 'ownerAddress'
        });
        parser.add_argument('-oids', '--operator-ids', {
            help: `Comma-separated list of operator IDs of the cluster`,
            required: true,
            dest: 'operatorIds'
        });
        const messageText = `Cluster Scanner`;
        const message = yield FigletMessage(messageText);
        if (message) {
            console.log(' -----------------------------------------------------------------------------------');
            console.log(`${message || messageText}`);
            console.log(' -----------------------------------------------------------------------------------');
            for (const str of String(package_json_1.default.description).match(/.{1,75}/g) || []) {
                console.log(` ${str}`);
            }
            console.log(' -----------------------------------------------------------------------------------\n');
        }
        try {
            let params = parser.parse_args();
            params.operatorIds = params.operatorIds.split(',')
                .map((value) => {
                    if (Number.isNaN(+value))
                        throw new Error('Operator Id should be the number');
                    return +value;
                });
            const command = new SSVScannerCommand_1.SSVScannerCommand(params);
            const result = yield command.execute();
            console.table(result.payload);
            console.log('\Cluster snapshot:');
            console.table(result.cluster);
console.log(`"raw": {
    "block": ${result.payload.Block},
    "cluster snapshot": ${JSON.stringify(result.cluster, null, "\t")},
    "cluster": [${Object.values(result.cluster)}]
}`);
        }
        catch (e) {
            console.error('\x1b[31m', e.message);
        }
    });
}
exports.default = main;
//# sourceMappingURL=cli-shared.js.map