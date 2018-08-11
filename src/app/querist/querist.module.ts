import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { VisualQueristComponent } from './visual-querist/visual-querist.component';
import { QueryResultsComponent } from './query-results/query-results.component';

import { SharedModule } from '../shared/shared.module';

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatInputModule,
  MatProgressBarModule
} from '@angular/material';


@NgModule({
  imports: [
    SharedModule,

    FormsModule,
    CommonModule,

    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule
  ],
  declarations: [
    VisualQueristComponent,
    QueryResultsComponent
  ],
  entryComponents: []
})
export class QueristModule { }
