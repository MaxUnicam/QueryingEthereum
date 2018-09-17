import { Settings } from './isettings';

import { Injectable } from '@angular/core';


@Injectable()
export class InMemorySettingsService extends Settings {

  public ethereumNodeUrl: string;

  public queryStartBlock: number;

  public numberOfBlocks: number;

  constructor() {
    super();
    this.ethereumNodeUrl = 'http://localhost:8545';
    this.queryStartBlock = 5823904;
    // this.numberOfBlocks = 50;
    this.numberOfBlocks = 5;
  }

}
