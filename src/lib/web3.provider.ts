import Web3 from 'web3';
import ABI_V3 from '../shared/v3.abi.json';

export default class Web3Provider {
  static BLOCK_RANGE_500K = 500000;

  static web3(nodeUrl: string) {
    return new Web3(nodeUrl);
  }

  static get abi() {
    return ABI_V3 as any;
  }

  static contract(nodeUrl: string, contractAddress: string) {
    return new (Web3Provider.web3(nodeUrl)).eth.Contract(
      Web3Provider.abi,
      contractAddress,
    );
  }

  /*
  static async currentBlockNumber(): Promise<number> {
    return await Web3Provider.web3.eth.getBlockNumber();
  }

  static async liquidationThresholdPeriod(): Promise<number> {
    return Web3Provider.contract.methods.getLiquidationThresholdPeriod().call();
  }

  static async minimumBlocksBeforeLiquidation(): Promise<number> {
    return Web3Provider.contract.methods.getLiquidationThresholdPeriod().call();
  }

  static async liquidatable(ownerAddress): Promise<boolean> {
    return Web3Provider.contract.methods.isLiquidatable(ownerAddress).call();
  }

  static async isLiquidated(ownerAddress): Promise<boolean> {
    return Web3Provider.contract.methods
      .isOwnerValidatorsDisabled(ownerAddress)
      .call();
  }

  static async burnRate(ownerAddress): Promise<string> {
    return Web3Provider.contract.methods
      .getAddressBurnRate(ownerAddress)
      .call();
  }

  static async totalBalanceOf(ownerAddress): Promise<string> {
    return Web3Provider.contract.methods.getAddressBalance(ownerAddress).call();
  }
  */
}
