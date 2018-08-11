import { Settings } from './isettings';

import { Injectable } from '@angular/core';


@Injectable()
export class InMemorySettingsService extends Settings {

  public ethereumNodeUrl: string;

  constructor() {
    super();
    this.ethereumNodeUrl = 'http://localhost:8545';
  }

}
