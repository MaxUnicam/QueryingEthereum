import { Injectable } from '@angular/core';


export interface IProjector {

  getProperties(source: any): string[];

  getBlockProperties(): string[];

  getTransactionProperties(): string[];

  getAccountProperties(): string[];

  getValues(source: any, properties: string[]): any[];

  count(source: any): number;

}


@Injectable()
export abstract class Projector implements IProjector {

  abstract getProperties(source: any): string[];

  abstract getBlockProperties(): string[];

  abstract getTransactionProperties(): string[];

  abstract getAccountProperties(): string[];

  abstract getValues(source: any, properties: string[]): any[];

  abstract count(source: any): number;

}
