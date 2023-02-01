import { SSVScannerCommand } from '../src/main';

async function main() {
  const params = {
    nodeUrl: '',
    contractAddress: '',
    ownerAddress: '',
    operatorIds: [],
  }
  const command = new SSVScannerCommand(params);
  console.log('Result:', await command.scan());
}

void main();