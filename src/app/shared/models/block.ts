import { Decimal } from 'decimal.js';

export interface Block {

  number: Number;

  hash: String;

  parentHash: String;

  nonce: String;

  sha3Uncles: String;

  logsBloom: String;

  transactionsRoot: String;

  stateRoot: String;

  miner: String;

  difficulty: Decimal;

  totalDifficulty: Decimal;

  size: Number;

  extraData: String;

  gasLimit: Number;

  gasUsed: Number;

  timestamp: Number;

  transactions: String[];

  uncles: String[];

}
