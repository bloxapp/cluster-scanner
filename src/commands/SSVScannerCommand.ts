import Web3Provider from '../lib/web3.provider';

export interface SSVScannerParams {
  nodeUrl: string,
  ownerAddress: string,
  contractAddress: string,
  operatorIds: number[],
}

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

  private params: SSVScannerParams;

  constructor(params_: SSVScannerParams) {
    this.params = params_;
  }

  async execute(): Promise<any> {
    const cluster = await this.getClusterSnapshot(this.MONTH, await Web3Provider.web3(this.params.nodeUrl).eth.getBlockNumber());
    return JSON.stringify(cluster);
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
