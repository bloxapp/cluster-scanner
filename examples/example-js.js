const { SSVScannerCommand } = require('../dist/tsc/src/commands/SSVScannerCommand');

async function main() {
  const params = {
    nodeUrl: '',
    contractAddress: '',
    ownerAddress: '',
    operatorIds: [],
  }
  const command = new SSVScannerCommand(params);
  const result = await command.scan()
  console.log(`{
    "block": ${result.payload.Block},
    "cluster snapshot": ${JSON.stringify(result.cluster, null, "\t")},
    "cluster": [${Object.values(result.cluster)}}]
}`);
}

void main();