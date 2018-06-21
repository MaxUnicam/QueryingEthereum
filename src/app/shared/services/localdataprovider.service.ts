import { DataProvider } from './idataprovider';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';
import { Block } from '../models/block';

import { Injectable } from '@angular/core';


@Injectable()
export class LocalDataProviderService extends DataProvider {

  getBlock(number: Number | String): Block {
    return null;
  }

  getBlocks(start: Number, end: Number): Block[] {
    return null;
  }

  getTransaction(hash: String): Transaction {
    return null;
  }

  getTransactionByIndex(blockNumber: Number, txIndex: Number): Transaction {
    return null;
  }

  getTransactions(blockNumber: Number): Transaction[] {
    return null;
  }

  getAccount(hash: String): Account {
    return null;
  }

  getAccounts(blockNumber: Number): Account[] {
    return null;
  }

}
