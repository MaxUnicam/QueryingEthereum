import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Query } from '../../models/query';


export interface IQuerist {

  query: Query;

  queryResult: any[];

  executeQuery(query?: Query): Observable<any>;

  saveQuery(query: Query);

}


@Injectable()
export abstract class Querist implements IQuerist {

  query: Query;

  queryResult: any[];

  abstract executeQuery(query?: Query): Observable<any>;

  abstract saveQuery(query: Query);

}
