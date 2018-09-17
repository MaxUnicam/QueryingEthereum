import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { Query } from '../models/query';
import { Constraint } from '../models/constraint';

import { Projector } from './interfaces/iprojector';
import { Selector } from './interfaces/iselector';
import { DataProvider } from './interfaces/idataprovider';
import { Querist } from './interfaces/iquerist';
import { Settings } from '../../settings/isettings';

import { Block } from '../models/block';
import { Transaction } from '../models/transaction';
import { Account } from '../models/account';


@Injectable()
export class CamQueristService extends Querist {

  public query: Query;
  public queryResult: any[] = [];

  constructor(private projector: Projector,
    private selector: Selector,
    private provider: DataProvider,
    private settings: Settings) { super(); }

  executeQuery(query?: Query): Observable<any> {
    return new Observable((observer) => {
      this.queryResult = [];

      if (!query) {
        query = this.query;
        if (!query) {
          observer.complete();
          return;
        }
      }

      let endBlock = this.settings.queryStartBlock as number;
      endBlock += this.settings.numberOfBlocks as number;

      if (query.sourceType === 'Transaction') {
        this.provider.getTransactions(this.settings.queryStartBlock, endBlock).subscribe(
          (transaction: Transaction) => this.validate(transaction, query.constraints, query.desiredProperties, observer),
          (msg) => console.log('Error Getting Transaction: ', msg),
          () => this.completeQuery(observer)
        );
      } else if (query.sourceType === 'Account') {
        this.provider.getAccount(query.constraints[0].value).subscribe(
          (account: Account) => this.validate(account, query.constraints, query.desiredProperties, observer),
          (msg) => console.log('Error Getting Account balance: ', msg),
          () => this.completeQuery(observer)
        );
      } else {
        this.provider.getBlocks(this.settings.queryStartBlock, endBlock).subscribe(
          (block: Block) => this.validate(block, query.constraints, query.desiredProperties, observer),
          (msg) => console.log('Error Getting Block: ', msg),
          () => this.completeQuery(observer)
        );
      }
    });
  }

  saveQuery(query: Query) {
    this.query = query;
  }

  private validate(item: any, constraints: Constraint[], properties: string[], observer: Observer<any>) {
    if (this.selector.isValid(item, constraints)) {
      const values = this.projector.getValues(item, properties);
      const t = { };
      for (let j = 0; j < values.length; j++) {
        t[properties[j] as string] = values[j];
      }

      // this.queryResult = [...this.queryResult];
      this.queryResult.push(t);
      // observer.next(t);
    }
  }

  private completeQuery(observer: Observer<any>) {
    console.log(this.queryResult);
    observer.complete();
  }

}
