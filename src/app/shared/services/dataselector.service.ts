import { Selector } from './iselector';
import { Constraint } from '../models/constraint';

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

    for (let i = 0; i < constraints.length; i++) {
      const constraint = constraints[i];
      source = this.applyConstraint(source, constraint);
    }

    return source;
  }


  private applyConstraint(source: any[], constraint: Constraint): any {
    if (!source || source.length <= 0) {
      return [];
    }

    if (this.isLastConstraint(constraint)) {
      return [source[source.length - 1]];
    }

    if (this.isFirstConstraint(constraint)) {
      return [source[0]];
    }

    const partialResult = [];
    for (let j = 0; j < source.length; j ++) {
      const row = source[j];
      if (this.validateConstraint(row, constraint)) {
        partialResult.push(row);
      }
    }

    return partialResult;
  }

  private validateConstraint(object: any, constraint: Constraint): boolean {
    const value = object[constraint.property as string];
    switch (constraint.operator) {
      case '=': {
        return value === constraint.value;
      }
      case '!=': {
        return value !== constraint.value;
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
      default: {
        return false;
      }
    }
  }

  private isLastConstraint(value: Constraint): boolean { return this.isEdgeConstraint(value, 'last'); }

  private isFirstConstraint(value: Constraint): boolean { return this.isEdgeConstraint(value, 'first'); }

  private isEdgeConstraint(value: Constraint, prop: string): boolean {
    if (!value.property || !value.operator || !value.value) {
      return false;
    }

    if (value.property.toLowerCase() !== prop.toLocaleLowerCase() || value.operator !== '=') {
      return false;
    }

    return value.value === 1;
  }

}
