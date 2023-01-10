import { ArgumentParser } from 'argparse';

import Web3Provider from '../lib/web3.provider';

export class SSVScannerCommand {
  protected DAY = 5400;
  protected WEEK = this.DAY * 7;
  protected MONTH = this.DAY * 30;

  protected eventsList = [
    'ClusterDeposit',
    'ClusterWithdrawn',
    'ValidatorRemoved',
    'ValidatorAdded',
    'ClusterLiquidated',
    'ClusterReactivated',
  ]

  private params: any;

  constructor() {
    const parser = new ArgumentParser();

    parser.add_argument('-n', '--node-url', {
      help: `The ETH1 node url.`,
      required: true,
      dest: 'nodeUrl'
    });
    parser.add_argument('-ca', '--ssv-contract-address', {
      help:
        'The SSV Contract address, used to find the latest cluster data snapshot. ' +
        'Refer to https://docs.ssv.network/developers/smart-contracts',
      required: true,
      dest: 'contractAddress'
    });
    parser.add_argument('-oa', '--owner-address', {
      help: "The liquidator's recipient address private key, used for creating a liquidation transaction",
      required: true,
      dest: 'ownerAddress'
    });
    parser.add_argument('-oids', '--operator-ids', {
      help: `Comma-separated list of operators IDs from the contract in the same sequence as you provided operators itself`,
      required: true,
      dest: 'operatorIds'
    });

    this.params = parser.parse_args();
    this.params.operatorIds = this.params.operatorIds.split(',')
      .map((value: any) => {
        if (Number.isNaN(+value)) throw new Error('Operator Id should be the number');
        return +value;
      });
    // this.subParserOptions.help += 'Example: "ssv-scanner key-shares --help" or "ssv-keys ksh --help"'
  }

  async execute(): Promise<any> {
    const pod = await this.getClusterSnapshot(this.MONTH, await Web3Provider.web3(this.params.nodeUrl).eth.getBlockNumber());

    return {
      params: { ...this.params },
      pod: JSON.stringify(pod),
    };
  }

  async getClusterSnapshot(range: any, toBlock: any): Promise<any> {
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
      if (filters.fromBlock <= 0) return null;
      result = await Web3Provider.contract(this.params.nodeUrl, this.params.contractAddress).getPastEvents('allEvents', filters);
    } catch(e) {
      console.error(e);
      let step;
      if (range === this.MONTH) {
        step = this.WEEK;
      } else if (range === this.WEEK) {
        step = this.DAY;
      }
      result = await this.getClusterSnapshot(step, toBlock);
    }
    let clusterSnapshot: any = null;
    let biggestBlockNumber = 0;
    result
      .filter((item: any) => this.eventsList.includes(item.event))
      .filter((item: any) => JSON.stringify(item.returnValues.operatorIds.map((value: any) => +value)) === JSON.stringify(this.params.operatorIds))
      .forEach((item: any) => {
        if (item.blockNumber > biggestBlockNumber) {
          biggestBlockNumber = item.blockNumber;
          clusterSnapshot = item.returnValues.cluster;
        }
      });

    if (!clusterSnapshot) {
      return await this.getClusterSnapshot(this.MONTH, toBlock - range);
    }

    return clusterSnapshot;
  }
}
