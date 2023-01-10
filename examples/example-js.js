const { SSVScannerCommand } = require('cluster-scanner');

async function main() {
  const params = {
    nodeUrl: '',
    contractAddress: '',
    ownerAddress: '',
    operatorIds: [],
  }
  const command = new SSVScannerCommand(params);
  console.log('cluster snapshot:', await command.execute());
}

void main();