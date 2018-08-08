import { Injectable } from '@angular/core';

import { Account } from '../../models/account';
import { Transaction } from '../../models/transaction';
import { Block } from '../../models/block';

import { Observable } from 'rxjs';


export interface IDataProvider {

  getBlock(number: number | String): Observable<Block>;

  getBlocks(start: number, end: number): Observable<Block>;

  getTransaction(hash: string): Observable<Transaction>;

  getTransactions(start: number, end: number): Observable<Transaction>;

  getAccount(hash: string): Observable<Account>;

}


@Injectable()
export abstract class DataProvider implements IDataProvider {

  abstract getBlock(number: number | String): Observable<Block>;

  abstract getBlocks(start: number, end: number): Observable<Block>;

  abstract getTransaction(hash: String): Observable<Transaction>;

  abstract getTransactions(start: number, end: number): Observable<Transaction>;

  abstract getAccount(hash: String): Observable<Account>;

}
