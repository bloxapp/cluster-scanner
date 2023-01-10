import { SSVScannerCommand } from 'cluster-scanner';

async function main() {
  const params = {
    nodeUrl: 'https://eth-goerli.alchemyapi.io/v2/G3aG8wN9V8jKWs0NwZkWf2-img3cH4CU',
    contractAddress: '0x7eB3b01176f90193A5BcBCFB7556009371383E9F',
    ownerAddress: '0x5cC0DdE14E7256340CC820415a6022a7d1c93A35',
    operatorIds: [1,2,3,4],
  }
  const command = new SSVScannerCommand(params);
  console.log(await command.execute());
}

void main();