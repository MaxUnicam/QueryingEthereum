import { Projector} from './iprojector';

import { Injectable } from '@angular/core';


@Injectable()
export class DataProjectorService extends Projector {

  getProperties(source: any): String[] {
    if (!source) {
      return [];
    }

    return Object.keys(source);
  }

  getValues(source: any, properties: String[]): any[] {
    if (!source || !properties) {
      return [];
    }

    const values: any[] = [];
    properties.forEach(prop => {
        values.push(source[prop as string]);
    });
    return values;
  }

  count(source: any): number {
    if (!source) {
      return 0;
    }

    if (Array.isArray(source)) {
      return (source as Array<any>).length;
    }

    return 1;
  }

}
