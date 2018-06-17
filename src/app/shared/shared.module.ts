import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataProvider } from './services/idataprovider';
import { LocalDataProviderService } from './services/localdataprovider.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: DataProvider, useClass: LocalDataProviderService }
  ],
  declarations: []
})
export class SharedModule { }
