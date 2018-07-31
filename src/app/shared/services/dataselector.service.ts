import { Selector } from './iselector';
import { Constraint, LogicalOperator } from '../models/constraint';

import { Injectable } from '@angular/core';


@Injectable()
export class DataSelectorService extends Selector {

  filter(source: any[], constraints: Constraint[]): any {
    if (!source || source.length <= 0) {
      return [];
    }

    if (!constraints || constraints.length <= 0) {
      return source;
    }

    const result = [];
    for (let i = 0; i < source.length; i++) {
      const item = source[i];
      if (this.respectsAllConstraints(item, constraints)) {
        result.push(item);
      }
    }

    return result;
  }

  private respectsAllConstraints(source: any, constraints: Constraint[]): boolean {
    if (!source) {
      return false;
    }

    if (!constraints || constraints.length <= 0) {
      return true;
    }

    let valid = true;
    let operator: LogicalOperator = LogicalOperator.And;
    for (let j = 0; j < constraints.length; j ++) {
      const constraint = constraints[j];
      if (operator == LogicalOperator.And) {
        valid = valid && this.respectsConstraint(source, constraint);
      } else {
        valid = valid || this.respectsConstraint(source, constraint);
      }

      operator = constraint.logicalOperator;
    }

    return valid;
  }

  private respectsConstraint(object: any, constraint: Constraint): boolean {
    const value = object[constraint.property as string];
    switch (constraint.operator) {
      case '=': {
        return value == constraint.value;
      }
      case '!=': {
        return value != constraint.value;
      }
      case '>': {
        return value > constraint.value;
      }
      case '<': {
        return value < constraint.value;
      }
      case '>=': {
        return value >= constraint.value;
      }
      case '<=': {
        return value <= constraint.value;
      }
      default: { return false; }
    }
  }

}
