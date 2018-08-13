import { Selector } from './interfaces/iselector';
import { Constraint, LogicalOperator } from '../models/constraint';

import { Injectable } from '@angular/core';

import { BigNumeber} from 'bignumber.js';


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

  isValid(item: any, constraints: Constraint[]): boolean {
    return this.respectsAllConstraints(item, constraints);
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

    if (typeof(value) === 'object') {
      const x = new BigNumeber(value);
      const y = new BigNumeber(constraint.value);
      if (x.isNaN() || y.isNaN()) {
        return;
      }

      switch (constraint.operator) {
        case '=': {
          return x.equals(y);
        }
        case '!=': {
          return !x.equals(y);
        }
        case '>': {
          return x.greaterThan(y);
        }
        case '<': {
          return x.lessThan(y);
        }
        case '>=': {
          return x.greaterThanOrEqualTo(y);
        }
        case '<=': {
          return x.lessThanOrEqualTo(y);
        }
        default: { return false; }
      }
    }

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
