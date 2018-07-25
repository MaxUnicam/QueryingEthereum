import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Constraint } from '../../shared/models/constraint';

@Component({
  selector: 'app-selection-dialog',
  templateUrl: './selection-dialog.component.html',
  styleUrls: ['./selection-dialog.component.css']
})
export class SelectionDialogComponent {

  constraint: Constraint;
  operators: String[];

  constructor(public dialogRef: MatDialogRef<SelectionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.constraint = new Constraint();
    this.operators = [
      '=',
      '>',
      '!=',
      '>=',
      '<=',
      '<',
    ];
  }

  save() {
    const json = JSON.stringify(this.constraint);
    this.dialogRef.close(json);
  }

  cancel() {
    this.dialogRef.close(null);
  }

}


export interface DialogData {
  properties: String[];
}
