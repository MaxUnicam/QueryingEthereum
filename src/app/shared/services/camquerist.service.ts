import { Querist } from './interfaces/iquerist';
import { Query } from '../models/query';

import { Projector } from './interfaces/iprojector';
import { Selector } from './interfaces/iselector';
import { DataProvider } from './interfaces/idataprovider';

import { Injectable } from '@angular/core';
import { Block } from '../models/block';
import { Constraint } from '../models/constraint';
import { Transaction } from '../models/transaction';


@Injectable()
export class CamQueristService extends Querist {

  public query: Query;
  public queryResult: any[] = [];

  constructor(private projector: Projector,
    private selector: Selector,
    private provider: DataProvider) { super(); }

  executeQuery(query?: Query) {
    if (!query) {
      query = this.query;
      if (!query) {
        return;
      }
    }

    if (query.sourceType === 'Transaction') {
      this.provider.getTransactions(5823990, 5823995).subscribe(
        (transaction: Transaction) => this.validate(transaction, query.constraints, query.desiredProperties),
        (msg) => console.log('Error Getting Transaction: ', msg),
        () => console.log(this.queryResult)
      );
    } else if (query.sourceType === 'Account') {
      // data = this.provider.getAccount('2424');
    } else {
      this.provider.getBlocks(1, 2).subscribe(
        (block: Block) => this.validate(block, query.constraints, query.desiredProperties),
        (msg) => console.log('Error Getting Block: ', msg),
        () => console.log(this.queryResult)
      );
    }
  }

  saveQuery(query: Query) {
    this.query = query;
  }

  private validate(item: any, constraints: Constraint[], properties: String[]) {
    if (this.selector.isValid(item, constraints)) {
      const values = this.projector.getValues(item, properties);
      const t = { };
      for (let j = 0; j < values.length; j++) {
        t[properties[j] as string] = values[j];
      }

      this.queryResult.push(t);
    }
  }

}
