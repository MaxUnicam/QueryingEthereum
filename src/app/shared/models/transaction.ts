import { BigNumeber } from 'bignumber.js';

export interface Transaction {

  hash: string;

  nonce: number;

  blockHash: string;

  blockNumber: number;

  transactionIndex: number;

  from: string;

  to: string;

  value: BigNumeber;

  gas: number;

  gasPrice: BigNumeber;

  input: string;

}
