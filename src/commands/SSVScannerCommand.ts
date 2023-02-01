import cliProgress from 'cli-progress';
import Web3Provider from '../lib/web3.provider';

export interface SSVScannerParams {
  nodeUrl: string,
  ownerAddress: string,
  contractAddress: string,
  operatorIds: number[],
}

export interface IData {
  payload: any;
  cluster: any;
}

export class SSVScannerCommand {
  protected DAY = 5400;
  protected WEEK = this.DAY * 7;
  protected MONTH = this.DAY * 30;
  protected progressBar: any;

  protected eventsList = [
    'ClusterDeposited',
    'ClusterWithdrawn',
    'ValidatorRemoved',
    'ValidatorAdded',
    'ClusterLiquidated',
    'ClusterReactivated',
  ]

  private params: SSVScannerParams;

  constructor(params_: SSVScannerParams) {
    if (!params_.contractAddress) throw Error('Contract address is required');
    if (!params_.nodeUrl) throw Error('ETH1 node is required');
    if (!Array.isArray(params_.operatorIds) || !this.isValidOperatorIds(params_.operatorIds.length)) throw Error('Operator ids list is not valid');
    if (!params_.ownerAddress) throw Error('Cluster owner address is required');
    this.params = params_;
  }

  async scan(): Promise<IData> {
    return this.getClusterSnapshot(false);
  }

  async execute(): Promise<IData> {
    console.log('\nScanning blockchain...');
    this.progressBar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    const data: IData = await this.getClusterSnapshot(true);
    this.progressBar.stop();
    return data;
  }

  async getClusterSnapshot(cli: boolean): Promise<IData> {
    let latestBlockNumber = await Web3Provider.web3(this.params.nodeUrl).eth.getBlockNumber();
    let step = this.MONTH;
    let clusterSnapshot;
    let biggestBlockNumber = 0;

    const filters = {
      fromBlock: latestBlockNumber - step,
      toBlock: latestBlockNumber,
      filter: {
        owner: this.params.ownerAddress,
      }
    };

    cli && this.progressBar.start(latestBlockNumber, 0);
    while (!clusterSnapshot && filters.fromBlock > 0) {
      let result: any;
      try {
        result = await Web3Provider.contract(this.params.nodeUrl, this.params.contractAddress).getPastEvents('allEvents', filters);
        result
        .filter((item: any) => this.eventsList.includes(item.event))
        .filter((item: any) => JSON.stringify(item.returnValues.operatorIds.map((value: any) => +value)) === JSON.stringify(this.params.operatorIds))
        .forEach((item: any) => {
          if (item.blockNumber > biggestBlockNumber) {
            biggestBlockNumber = item.blockNumber;
            clusterSnapshot = item.returnValues.cluster;
          }
        });
        filters.toBlock = filters.fromBlock;
      } catch(e) {
        console.error(e);
        if (step === this.MONTH) {
          step = this.WEEK;
        } else if (step === this.WEEK) {
          step = this.DAY;
        }
      }
      filters.fromBlock = filters.toBlock - step;  
      cli && this.progressBar.update(latestBlockNumber - (filters.toBlock - step));  
    }

    clusterSnapshot = clusterSnapshot || ['0','0','0','0','0',false];
    return {
      payload: {
        'Owner': this.params.ownerAddress,
        'Operators': this.params.operatorIds.join(','),
        'Block': biggestBlockNumber || latestBlockNumber,
        'Data': clusterSnapshot.join(','),  
      },
      cluster: {
        validatorCount: clusterSnapshot[0],
        networkFee: clusterSnapshot[1],
        networkFeeIndex: clusterSnapshot[2],
        index: clusterSnapshot[3],
        balance: clusterSnapshot[4],
        disabled: clusterSnapshot[5],
      }
    };
  }

  private isValidOperatorIds(operatorsLength: number) {
    return (operatorsLength < 4 || operatorsLength > 13 || operatorsLength % 3 != 1) ? false : true;
  }
}
