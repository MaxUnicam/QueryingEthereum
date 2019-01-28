import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinerComponent } from './miner/miner.component';

import { MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatButtonModule
  ],

  declarations: [
    MinerComponent
  ],

  exports: [
    MinerComponent
  ]
})
export class MiningModule { }
