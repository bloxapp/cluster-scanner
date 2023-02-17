import { SSVScannerCommand } from '../src/main';

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
    "cluster": [${result.cluster.validatorCount},${result.cluster.networkFee},${result.cluster.networkFeeIndex},${result.cluster.index},${result.cluster.balance},${result.cluster.disabled}]
}`);
}

void main();