import { DataProvider } from './interfaces/idataprovider';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';
import { Block } from '../models/block';

import { Injectable } from '@angular/core';

import { BigNumber } from 'bignumber.js';
import { Observable } from 'rxjs';


@Injectable()
export class FakeDataProviderService extends DataProvider {

  getBlockNumber(): number {
    return 5952222;
  }

  getBlock(number: number | string): Observable<Block> {
    return new Observable((observer) => {
      observer.next(this.createBlockArray()[0]);
      observer.complete();
    });
  }

  getBlocks(start: number, end: number): Observable<Block> {
    return new Observable((observer) => {
      const blocks = this.createBlockArray();
      for (let i = 0; i < blocks.length; i ++) {
        observer.next(blocks[i]);
      }

      observer.complete();
    });
  }

  getTransaction(hash: String): Observable<Transaction> {
    return new Observable((observer) => {
      observer.next(this.createTransaction());
      observer.complete();
    });
  }

  getTransactions(start: number, end: number): Observable<Transaction> {
    return new Observable((observer) => {
      for (let i = 0; i < 100; i++) {
        observer.next(this.createTransaction());
      }

      observer.complete();
    });
  }

  getAccount(hash: string): Observable<Account> {
    return new Observable((observer) => {
      observer.next(this.createAccount(hash));
      observer.complete();
    });
  }


  private createBlockArray(): Block[] {
    const data: Block[] = [];
    let total = 0;

    for (let i = 0; i < 100; i++) {
      total += i;
      const block = <Block> {
        number: i,
        hash: '0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46',
        parentHash: '0x2302e1c0b972d00932deb5dab9eb2982f570597d9d42504c05d9c2147eaf9c88',
        nonce: '0xfb6e1a62d119228b',
        sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
        logsBloom: '0x00000000000000000000000',
        transactionsRoot: '0x3a1b03875115b79539e5bd33fb00d8f7b7cd61929d5a3c574f507b8acf415bee',
        stateRoot: '0xf1133199d44695dfa8fd1bcfe424d82854b5cebef75bddd7e40ea94cda515bcb',
        miner: '0x8888f1f195afa192cfee860698584c030f4c9db1',
        difficulty: new BigNumber(i),
        totalDifficulty: new BigNumber(total),
        size: Math.floor(Math.random() * 1000) + 1,
        extraData: '0x',
        gasLimit: Math.floor(Math.random() * 1000000) + 1,
        gasUsed: Math.floor(Math.random() * 1000000) + 1,
        timestamp: Math.floor(Math.random() * 1000000) + 1,
        transactions: [
          '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b'
        ],
        uncles: []
      };

      data.push(block);
    }

    return data;
  }

  private createTransaction() {
    return <Transaction> {
      hash: '0x9fc76417374aa880d4449a1f7f31ec597f00b1f6f3dd2d66f4c9c6c445836d8b',
      nonce: Math.floor(Math.random() * 1000) + 1,
      blockHash: '0xef95f2f1ed3ca60b048b4bf67cde2195961e0bba6f70bcbea9a2c4e133e34b46',
      blockNumber: Math.floor(Math.random() * 1000) + 1,
      transactionIndex: Math.floor(Math.random() * 100) + 1,
      from: '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
      to: '0x6295ee1b4f6dd65047762f924ecd367c17eabf8f',
      value: new BigNumber((Math.random() * 1000) + 1),
      gas: Math.floor(Math.random() * 1000000) + 1,
      gasPrice: new BigNumber(12),
      input: '0x57cb2fc4'
    };
  }

  private createAccount(hash: string) {
    return <Account> {
      hash: hash,
      balance: new BigNumber(Math.random() * 100000)
    };
  }

}
