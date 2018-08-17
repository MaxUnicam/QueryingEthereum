import { Injectable } from '@angular/core';


export interface ISettings {

  ethereumNodeUrl: string;

  queryStartBlock: number;

  numberOfBlocks: number;

}


@Injectable()
export abstract class Settings implements ISettings {

  ethereumNodeUrl: string;

  queryStartBlock: number;

  numberOfBlocks: number;

}
