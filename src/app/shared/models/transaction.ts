import { Decimal } from 'decimal.js';

export interface Transaction {

  hash: string;

  nonce: number;

  blockHash: string;

  blockNumber: number;

  transactionIndex: number;

  from: string;

  to: string;

  value: Decimal;

  gas: number;

  gasPrice: Decimal;

  input: string;

}
