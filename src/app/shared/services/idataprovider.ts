import { Injectable } from '@angular/core';

export interface IDataProvider {
  doStuff();
}


@Injectable()
export abstract class DataProvider implements IDataProvider {

  abstract doStuff();

}
