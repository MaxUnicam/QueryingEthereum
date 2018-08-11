import { DataProvider } from './interfaces/idataprovider';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';
import { Block } from '../models/block';
import { Settings } from '../../settings/isettings';

import { Injectable } from '@angular/core';

import Web3 from 'web3';
import { Observable } from 'rxjs';


@Injectable()
export class LocalDataProviderService extends DataProvider {

  // ./parity --jsonrpc-cors all

  private web3: Web3;

  constructor(private settings: Settings) {
    super();
    this.web3 = new Web3(new Web3.providers.HttpProvider(settings.ethereumNodeUrl));
    // console.log(this.getTransactions(5823994));
    // console.log(this.getBlock(this.web3.eth.blockNumber - 10));
    // console.log(this.getBlocks(3150, 3180));
    // console.log(this.getTransaction('0x1ae84748f931bddb780e5f294666bd24297885e466f3ccc70c34d6453b679f0c'));
    // console.log(transaction);
  }

  getBlock(number: number | String): Observable<Block> {
    return new Observable((observer) => {
      observer.next(this.web3.eth.getBlock(number) as Block);
    });
  }

  getBlocks(start: number, end: number): Observable<Block> {
    return new Observable((observer) => {
      for (let i = start; i < end; i ++) {
        observer.next(this.web3.eth.getBlock(i) as Block);
      }

      observer.complete();
    });
  }

  getTransaction(hash: String): Observable<Transaction> {
    return new Observable((observer) => {
      observer.next(this.web3.eth.getTransaction(hash) as Transaction);
    });
  }

  getTransactions(start: number, end: number): Observable<Transaction> {
    return new Observable((observer) => {
      for (let j = start; j < end; j ++) {
        const block = this.web3.eth.getBlock(j) as Block;
        if (!block) {
          continue;
        }

        for (let i = 0; i < block.transactions.length; i ++) {
          const hash = block.transactions[i];
          const item = this.web3.eth.getTransaction(hash) as Transaction;
          observer.next(item);
        }
      }

      observer.complete();
    });
  }

  getAccount(hash: String): Observable<Account> {
    return new Observable((observer) => {
      const balance = this.web3.eth.getBalance(hash, 'latest');
      const account = {
        hash: hash,
        balance: balance
      };

      observer.next(account);
      observer.complete();
    });
  }

}
