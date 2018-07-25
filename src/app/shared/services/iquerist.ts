import { Injectable } from '@angular/core';

import { Constraint } from '../models/constraint';


export interface IQuerist {

  queryResult: any[];

  executeQuery(data: any[], properties: String[], constraints: Constraint[]);

}


@Injectable()
export abstract class Querist implements IQuerist {

  queryResult: any[];

  abstract executeQuery(data: any[], properties: String[], constraints: Constraint[]);

}
