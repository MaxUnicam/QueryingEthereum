import { DataProvider } from './idataprovider';
import { Injectable } from '@angular/core';

@Injectable()
export class FakeDataProviderService extends DataProvider {

  doStuff() {
    console.log('Test');
  }

}
