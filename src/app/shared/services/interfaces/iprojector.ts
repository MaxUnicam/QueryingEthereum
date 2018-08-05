import { Injectable } from '@angular/core';


export interface IProjector {

  getProperties(source: any): String[];

  getBlockProperties(): String[];

  getTransactionProperties(): String[];

  getAccountProperties(): String[];

  getValues(source: any, properties: String[]): any[];

  count(source: any): number;

}


@Injectable()
export abstract class Projector implements IProjector {

  abstract getProperties(source: any): String[];

  abstract getBlockProperties(): String[];

  abstract getTransactionProperties(): String[];

  abstract getAccountProperties(): String[];

  abstract getValues(source: any, properties: String[]): any[];

  abstract count(source: any): number;

}
