import { Querist } from './iquerist';
import { Constraint } from '../models/constraint';

import { Projector } from '../../shared/services/iprojector';
import { Selector } from '../../shared/services/iselector';

import { Injectable } from '@angular/core';


@Injectable()
export class CamQueristService extends Querist {

  public queryResult: any[] = [];

  constructor(private projector: Projector, private selector: Selector) {
    super();
  }

  executeQuery(data: any[], properties: String[], constraints: Constraint[]) {
    const result = [];

    console.log('Data');
    console.log(data);

    data = this.selector.filter(data, constraints);

    console.log('Data filtered');
    console.log(data);

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

}
