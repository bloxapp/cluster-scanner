const { SSVScannerCommand } = require('../dist/tsc/src/commands/SSVScannerCommand');

async function main() {
  const params = {
    nodeUrl: 'https://eth-goerli.alchemyapi.io/v2/G3aG8wN9V8jKWs0NwZkWf2-img3cH4CU',
    contractAddress: '0x3F55b8642157046F095173e3F7D86bfF2D1B52D2',
    ownerAddress: '0xb2AeBd073B24De663e685717d26d089Fdaa44444',
    operatorIds: [1, 2, 3, 4],
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