import { Injectable } from '@angular/core';


export interface ISelector {

  first(source: any[]): any;

  last(source: any[]): any;

}


@Injectable()
export abstract class Selector implements ISelector {

  abstract first(source: any[]): any;

  abstract last(source: any[]): any;

}
