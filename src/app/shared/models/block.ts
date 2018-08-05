import { Decimal } from 'decimal.js';

export interface Block {

  number: number;

  hash: string;

  parentHash: string;

  nonce: string;

  sha3Uncles: string;

  logsBloom: string;

  transactionsRoot: string;

  stateRoot: string;

  miner: string;

  difficulty: Decimal;

  totalDifficulty: Decimal;

  size: number;

  extraData: string;

  gasLimit: number;

  gasUsed: number;

  timestamp: number;

  transactions: string[];

  uncles: string[];

}
