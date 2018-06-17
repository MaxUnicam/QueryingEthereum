import { DataProvider } from './idataprovider';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalDataProviderService extends DataProvider {

  doStuff() {
    console.log('Test');
  }

}
