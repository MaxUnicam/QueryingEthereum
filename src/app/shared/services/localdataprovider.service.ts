import { DataProvider } from './interfaces/idataprovider';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';
import { Block } from '../models/block';

import { Injectable } from '@angular/core';

import Web3 from 'web3';


@Injectable()
export class LocalDataProviderService extends DataProvider {

  // ./parity --jsonrpc-cors all

  private web3: Web3;

  constructor() {
    super();
    this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    // console.log(this.getTransactions(5823994));
    // console.log(this.getBlock(this.web3.eth.blockNumber - 10));
    // console.log(this.getBlocks(3150, 3180));
    // console.log(this.getTransaction('0x1ae84748f931bddb780e5f294666bd24297885e466f3ccc70c34d6453b679f0c'));
    // console.log(transaction);
  }

  getBlock(number: number | String): Block {
    return this.web3.eth.getBlock(number) as Block;
  }

  getBlocks(start: number, end: number): Block[] {
    const blocks: Block[] = [];
    for (let i = start; i < end; i ++) {
      blocks.push(this.web3.eth.getBlock(i) as Block);
    }

    return blocks;
  }

  getTransaction(hash: String): Transaction {
    return this.web3.eth.getTransaction(hash) as Transaction;
  }

  getTransactionByIndex(blockNumber: number, txIndex: number): Transaction {
    return this.web3.eth.getTransactionFromBlock(blockNumber, txIndex) as Transaction;
  }

  getTransactions(blockNumber: number): Transaction[] {
    const transactions: Transaction[] = [];
    const block = this.getBlock(blockNumber);

    for (let i = 0; i < block.transactions.length; i ++) {
      const hash = block.transactions[i];
      const item = this.web3.eth.getTransaction(hash);
      transactions.push(item);
    }

    return transactions;
  }

  getAccount(hash: String): Account {
    return null;
  }

  getAccounts(blockNumber: number): Account[] {
    return null;
  }

}
