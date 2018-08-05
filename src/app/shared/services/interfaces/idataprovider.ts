import { Injectable } from '@angular/core';

import { Account } from '../../models/account';
import { Transaction } from '../../models/transaction';
import { Block } from '../../models/block';


export interface IDataProvider {

  getBlock(number: number | String): Block;

  getBlocks(start: number, end: number): Block[];

  getTransaction(hash: String): Transaction;

  getTransactionByIndex(blockNumber: number, txIndex: number): Transaction;

  getTransactions(blockNumber: number): Transaction[];

  getAccount(hash: String): Account;

  getAccounts(blockNumber: number): Account[];

}


@Injectable()
export abstract class DataProvider implements IDataProvider {

  abstract getBlock(number: number | String): Block;

  abstract getBlocks(start: number, end: number): Block[];

  abstract getTransaction(hash: String): Transaction;

  abstract getTransactionByIndex(blockNumber: number, txIndex: number): Transaction;

  abstract getTransactions(blockNumber: number): Transaction[];

  abstract getAccount(hash: String): Account;

  abstract getAccounts(blockNumber: number): Account[];

}
