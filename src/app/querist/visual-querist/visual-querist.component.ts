import { Component, OnInit } from '@angular/core';

import { DataProvider } from '../../shared/services/idataprovider';
import { Projector } from '../../shared/services/iprojector';
import { Querist } from '../../shared/services/iquerist';

import { Router } from '@angular/router';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionDialogComponent } from '../selection-dialog/selection-dialog.component';
import { Constraint } from '../../shared/models/constraint';


import Web3 from 'web3';

@Component({
  selector: 'app-visual-querist',
  templateUrl: './visual-querist.component.html',
  styleUrls: ['./visual-querist.component.css']
})
export class VisualQueristComponent implements OnInit {

  private dataType = 'Block';

  private constraints: Constraint[] = [
    { property: 'first', operator: '=', value: 1 },
    { property: 'last', operator: '=', value: 1 }
  ];
  public currentProperties: String[] = [];
  public selectedProperties: String[] = [];
  public selectedConstraints: Constraint[] = [];
  public queryResult: any[] = [];

  constructor(private provider: DataProvider,
    private projector: Projector,
    private querist: Querist,
    private router: Router,
    public dialog: MatDialog) { }

    openSelectionDialog() {
      const dialogRef = this.dialog.open(SelectionDialogComponent, {
        width: '620px',
        height: '200px',
        data: { properties: this.currentProperties }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (!result) {
          return;
        }

        const constraint = JSON.parse(result);
        if (constraint) {
          this.constraints.push(constraint);
        }
      });
    }

  ngOnInit() {
    // let web3;

    // if (typeof web3 !== 'undefined') {
    //   web3 = new Web3(web3.currentProvider);
    // } else {
    //   web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    // }

    // console.log(web3);
    // console.log('Siamo al blocco: ');
    // console.log(web3.eth.blockNumber);
  }

  updateFilter(item) {
    const index = this.selectedConstraints.indexOf(item);
    if (index < 0) {
      this.selectedConstraints.push(item);
    } else {
      this.selectedConstraints.splice(index, 1);
    }
  }

  updateSelection(type) {
    this.dataType = type;
    if (type === 'Block') {
      this.currentProperties = this.projector.getBlockProperties();
    } else if (type === 'Transaction') {
      this.currentProperties = this.projector.getTransactionProperties();
    } else if (type === 'Account') {
      this.currentProperties = this.projector.getAccountProperties();
    } else {
      this.currentProperties = [];
    }
  }

  updateProjection(prop) {
    const index = this.selectedProperties.indexOf(prop);
    if (index < 0) {
      this.selectedProperties.push(prop);
    } else {
      this.selectedProperties.splice(index, 1);
    }
  }

  public startQuery() {
    let items: any[];
    if (this.dataType === 'Transaction') {
      items = this.provider.getTransactions(213112);
    } else if (this.dataType === 'Account') {
      items = this.provider.getAccounts(2424);
    } else {
      items = this.provider.getBlocks(1, 2);
    }

    if (!this.selectedProperties || this.selectedProperties.length <= 0) {
      this.selectedProperties = this.currentProperties;
    }

    this.querist.executeQuery(items, this.selectedProperties, this.selectedConstraints);
    this.router.navigate(['results']);
  }

}
