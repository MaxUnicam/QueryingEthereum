import { Injectable } from '@angular/core';

import { Query } from '../models/query';


export interface IQuerist {

  query: Query;

  queryResult: any[];

  executeQuery(query?: Query);

  saveQuery(query: Query);

}


@Injectable()
export abstract class Querist implements IQuerist {

  query: Query;

  queryResult: any[];

  abstract executeQuery(query?: Query);

  abstract saveQuery(query: Query);

}
