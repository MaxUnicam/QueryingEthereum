import { Injectable } from '@angular/core';


export interface IProjector {

  getProperties(source: any): String[];

  getValues(source: any, properties: String[]): any[];

  count(source: any): number;

}


@Injectable()
export abstract class Projector implements IProjector {

  abstract getProperties(source: any): String[];

  abstract getValues(source: any, properties: String[]): any[];

  abstract count(source: any): number;

}
