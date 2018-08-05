import { Component, OnInit } from '@angular/core';

import { DataProvider } from '../../shared/services/interfaces/idataprovider';
import { Projector } from '../../shared/services/interfaces/iprojector';

import { Block } from '../../shared/models/block';
import { Transaction } from '../../shared/models/transaction';
import { Account } from '../../shared/models/account';
import { Selector } from '../../shared/services/interfaces/iselector';

@Component({
  selector: 'app-console-debug',
  templateUrl: './console-debug.component.html',
  styleUrls: ['./console-debug.component.css']
})
export class ConsoleDebugComponent implements OnInit {

  private dataType = 'Block';
  private block: Block;
  private transaction: Transaction;
  private account: Account;

  public firstChecked = false;
  public lastChecked = false;

  public currentProperties: String[] = [];
  public selectedProperties: String[] = [];
  public queryResult: any[] = [];


  constructor(private provider: DataProvider, private projector: Projector, private selector: Selector) { }

  ngOnInit() {
    this.block = this.provider.getBlock(231);
    this.transaction = this.provider.getTransaction('asdasda');
    this.account = this.provider.getAccount('asdasd');
  }


  public updateSelection(type) {
    this.dataType = type;
    if (type === 'Block') {
      this.currentProperties = this.projector.getProperties(this.block);
    } else if (type === 'Transaction') {
      this.currentProperties = this.projector.getProperties(this.transaction);
    } else if (type === 'Account') {
      this.currentProperties = this.projector.getProperties(this.account);
    } else {
      this.currentProperties = [];
    }
  }


  public updateProjection(prop) {
    const index = this.selectedProperties.indexOf(prop);
    if (index < 0) {
      this.selectedProperties.push(prop);
    } else {
      this.selectedProperties.splice(index, 1);
    }
  }


  public startQuery() {
    let items: any[];
    if (this.dataType === 'Transaction') {
      items = this.provider.getTransactions(213112);
    } else if (this.dataType === 'Account') {
      items = this.provider.getAccounts(2424);
    } else {
      items = this.provider.getBlocks(1, 2);
    }

    // if (this.firstChecked) {
    //   const item = this.selector.first(items);
    //   items = [];
    //   items.push(item);
    // } else if (this.lastChecked) {
    //   const item = this.selector.last(items);
    //   items = [];
    //   items.push(item);
    // }

    const result = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const values = this.projector.getValues(item, this.selectedProperties);
      const t = { };
      for (let j = 0; j < values.length; j++) {
        t[this.selectedProperties[j] as string] = values[j];
      }
      result.push(t);
    }

    this.queryResult = result;
  }

}
