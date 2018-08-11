import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout/layout.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { VisualQueristComponent } from '../querist/visual-querist/visual-querist.component';
import { QueryResultsComponent } from '../querist/query-results/query-results.component';
import { SettingsComponent } from '../settings/settings/settings.component';

import { RouterModule, Routes } from '@angular/router';

import { QueristModule } from '../querist/querist.module';
import { SettingsModule } from '../settings/settings.module';

import {
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule
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
    CommonModule,
    RouterModule.forRoot(appRoutes),

    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,

    QueristModule,
    SettingsModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [
    LayoutComponent,
    SideMenuComponent
  ]
})
export class LayoutModule { }
