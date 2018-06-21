import { Decimal } from 'decimal.js';

export interface Transaction {

  hash: String;

  nonce: Number;

  blockHash: String;

  blockNumber: Number;

  transactionIndex: Number;

  from: String;

  to: String;

  value: Decimal;

  gas: Number;

  gasPrice: Decimal;

  input: String;

}
