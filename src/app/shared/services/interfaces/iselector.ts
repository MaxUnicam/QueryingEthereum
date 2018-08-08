import { Injectable } from '@angular/core';
import { Constraint } from '../../models/constraint';

export interface ISelector {

  filter(source: any[], constraints: Constraint[]): any;

  isValid(item: any, constraints: Constraint[]): boolean;

}


@Injectable()
export abstract class Selector implements ISelector {

  abstract filter(source: any[], constraints: Constraint[]): any;

  abstract isValid(item: any, constraints: Constraint[]): boolean;

}
