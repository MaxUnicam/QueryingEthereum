import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { VisualQueristComponent } from './visual-querist/visual-querist.component';
import { QueryResultsComponent } from './query-results/query-results.component';
import { SettingsComponent } from './settings/settings.component';

import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSidenavModule,
  MatSelectModule,
  MatInputModule,
  MatProgressBarModule
} from '@angular/material';


const appRoutes: Routes = [
  { path: 'querist', component: VisualQueristComponent },
  { path: 'results', component: QueryResultsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '',
    redirectTo: 'querist',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    SharedModule,

    FormsModule,

    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSidenavModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [
    LayoutComponent,
    VisualQueristComponent,
    QueryResultsComponent,
    SettingsComponent
  ],
  entryComponents: []
})
export class QueristModule { }
