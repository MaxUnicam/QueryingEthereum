import { DataProvider } from './interfaces/idataprovider';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';
import { Block } from '../models/block';
import { Settings } from '../../settings/isettings';

import { Injectable } from '@angular/core';

import Web3 from 'web3';
import { Observable } from 'rxjs';

import { BigNumber } from 'bignumber.js';

@Injectable()
export class LocalDataProviderService extends DataProvider {

  // ./parity --jsonrpc-cors all

  private web3: Web3;
  private delayInms = 100;

  constructor(private settings: Settings) {
    super();
    this.web3 = new Web3(new Web3.providers.HttpProvider(settings.ethereumNodeUrl));
    // console.log(this.getTransactions(5823994));
    // console.log(this.getBlock(this.web3.eth.blockNumber - 10));
    // console.log(this.getBlocks(3150, 3180));
    // console.log(this.getTransaction('0x1ae84748f931bddb780e5f294666bd24297885e466f3ccc70c34d6453b679f0c'));
    // console.log(transaction);
  }

  getBlockNumber(): number {
    return this.web3.eth.blockNumber;
  }

  getBlock(number: number | string): Observable<Block> {
    return new Observable((observer) => {
      const block = this.web3.eth.getBlock(number) as Block;
      block.difficulty = this.normalizeEth(block.difficulty);
      block.totalDifficulty = this.normalizeEth(block.totalDifficulty);
      observer.next(block);
      observer.complete();
    });
  }

  getBlocks(start: number, end: number): Observable<Block> {
    return new Observable((observer) => {
      for (let i = start; i < end; i ++) {
        setTimeout((() => {
          const block = this.web3.eth.getBlock(i) as Block;
          block.difficulty = this.normalizeEth(block.difficulty);
          block.totalDifficulty = this.normalizeEth(block.totalDifficulty);
          observer.next(block);
          if (i + 1 === end) {
            observer.complete();
          }
        }), this.delayInms);
      }
    });
  }

  getTransaction(hash: String): Observable<Transaction> {
    return new Observable((observer) => {
      const transaction = this.web3.eth.getTransaction(hash) as Transaction;
      transaction.value = this.normalizeEth(transaction.value);
      observer.next(transaction);
      observer.complete();
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
          setTimeout((() => {
            const hash = block.transactions[i];
            const item = this.web3.eth.getTransaction(hash) as Transaction;
            item.value = this.normalizeEth(item.value);
            observer.next(item);

            if (j + 1 === end && i + 1 === block.transactions.length) {
              observer.complete();
            }
          }), this.delayInms);
        }
      }
    });
  }

  getAccount(hash: string): Observable<Account> {
    return new Observable((observer) => {
      const balance = this.web3.eth.getBalance(hash, this.web3.eth.blockNumber) as BigNumber;
      const account = {
        hash: hash,
        balance: this.normalizeEth(balance)
      };

      observer.next(account);
      observer.complete();
    });
  }


  private normalizeEth(value: BigNumber): BigNumber {
    if (!value) {
      return new BigNumber(0);
    }

    return value.dividedBy(new BigNumber('1000000000000000000'));
  }

}
