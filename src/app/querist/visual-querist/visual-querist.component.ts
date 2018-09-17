import { Component, OnInit } from '@angular/core';

import { Projector } from '../../shared/services/interfaces/iprojector';
import { Querist } from '../../shared/services/interfaces/iquerist';

import { Router } from '@angular/router';

import { Constraint, LogicalOperator } from '../../shared/models/constraint';
import { Query } from '../../shared/models/query';

import { LocalDataProviderService } from '../../shared/services/localdataprovider.service';
import { Transaction } from '../../shared/models/transaction';
import { Account } from '../../shared/models/account';
import { Settings } from '../../settings/isettings';

@Component({
  selector: 'app-visual-querist',
  templateUrl: './visual-querist.component.html',
  styleUrls: ['./visual-querist.component.css']
})
export class VisualQueristComponent implements OnInit {

  public operators: string[] = [ '=', '!=', '>', '>=', '<=', '<' ];
  public constraints: Constraint[] = [
    { property: '', operator: '', value: '' }
  ];

  public dataType = 'Block';
  public logicalOperators = LogicalOperator;
  public currentProperties: string[] = [];
  public selectedProperties: string[] = [];

  constructor(
    private projector: Projector,
    private querist: Querist,
    private router: Router) { }

  ngOnInit() {

  }

  updateSelection(type) {
    this.constraints = [ { property: '', operator: '', value: '' } ];
    this.dataType = type;
    if (type === 'Block') {
      this.currentProperties = this.projector.getBlockProperties();
    } else if (type === 'Transaction') {
      this.currentProperties = this.projector.getTransactionProperties();
    } else if (type === 'Account') {
      this.currentProperties = this.projector.getAccountProperties();
      this.constraints = [ { property: 'hash', operator: '=', value: '' } ];
    } else {
      this.currentProperties = [];
    }
  }

  public updateProjection(prop) {
    const index = this.selectedProperties.indexOf(prop);
    if (index < 0) {
      this.selectedProperties.push(prop);
    } else {
      this.selectedProperties.splice(index, 1);
    }
  }

  public startQuery() {
    if (!this.selectedProperties || this.selectedProperties.length <= 0) {
      this.selectedProperties = this.currentProperties;
    }

    const query: Query = {
      sourceType: this.dataType,
      desiredProperties: this.selectedProperties,
      constraints: this.getValidConstraints()
    };

    this.querist.saveQuery(query);
    this.router.navigate(['results']);
  }

  public addConstraint() {
    const last = this.constraints[this.constraints.length - 1];
    if (last) {
      last.logicalOperator = LogicalOperator.And;
    }

    this.constraints.push({ property: '', operator: '', value: '' });
  }

  private getValidConstraints(): Constraint[] {
    const validConstraints: Constraint[] = [];
    if (!this.constraints) {
      return validConstraints;
    }

    for (let i = 0; i < this.constraints.length; i ++) {
      const item = this.constraints[i];
      if (item.property && item.operator) {
        validConstraints.push(item);
      }
    }

    return validConstraints;
  }

}
