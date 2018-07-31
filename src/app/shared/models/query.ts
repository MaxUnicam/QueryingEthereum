import { Constraint } from './constraint';

export interface Query {

  sourceType: String;

  desiredProperties: String[];

  constraints: Constraint[];

}
