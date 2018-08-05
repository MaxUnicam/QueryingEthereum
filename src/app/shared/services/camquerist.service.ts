import { Querist } from './interfaces/iquerist';
import { Query } from '../models/query';

import { Projector } from './interfaces/iprojector';
import { Selector } from './interfaces/iselector';
import { DataProvider } from './interfaces/idataprovider';

import { Injectable } from '@angular/core';


@Injectable()
export class CamQueristService extends Querist {

  public query: Query;

  public queryResult: any[] = [];

  constructor(private projector: Projector, private selector: Selector, private provider: DataProvider) {
    super();
  }

  executeQuery(query?: Query) {
    if (!query) {
      return;
    }

    let data = [];
    if (query.sourceType === 'Transaction') {
      data = this.provider.getTransactions(213112);
    } else if (query.sourceType === 'Account') {
      data = this.provider.getAccounts(2424);
    } else {
      data = this.provider.getBlocks(1, 2);
    }

    const result = [];

    const constraints = query.constraints;
    const properties = query.desiredProperties;

    data = this.selector.filter(data, constraints);

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      const values = this.projector.getValues(item, properties);
      const t = { };
      for (let j = 0; j < values.length; j++) {
        t[properties[j] as string] = values[j];
      }
      result.push(t);
    }

    this.queryResult = result;
  }

  saveQuery(query: Query) {
    this.query = query;
  }

}
