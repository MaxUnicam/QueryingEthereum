import { Selector } from './iselector';

import { Injectable } from '@angular/core';


@Injectable()
export class DataSelectorService extends Selector {

  first(source: any[]): any {
    if (!source || source.length <= 0) {
      return null;
    }

    return source[0];
  }

  last(source: any[]): any {
    if (!source || source.length <= 0) {
      return null;
    }

    return source[source.length - 1];
  }

}
