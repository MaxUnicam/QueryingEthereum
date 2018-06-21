import { Injectable } from '@angular/core';

import { Account } from '../models/account';
import { Transaction } from '../models/transaction';
import { Block } from '../models/block';


export interface IDataProvider {

  getBlock(number: Number | String): Block;

  getBlocks(start: Number, end: Number): Block[];

  getTransaction(hash: String): Transaction;

  getTransactionByIndex(blockNumber: Number, txIndex: Number): Transaction;

  getTransactions(blockNumber: Number): Transaction[];

  getAccount(hash: String): Account;

  getAccounts(blockNumber: Number): Account[];

}


@Injectable()
export abstract class DataProvider implements IDataProvider {

  abstract getBlock(number: Number | String): Block;

  abstract getBlocks(start: Number, end: Number): Block[];

  abstract getTransaction(hash: String): Transaction;

  abstract getTransactionByIndex(blockNumber: Number, txIndex: Number): Transaction;

  abstract getTransactions(blockNumber: Number): Transaction[];

  abstract getAccount(hash: String): Account;

  abstract getAccounts(blockNumber: Number): Account[];

}
