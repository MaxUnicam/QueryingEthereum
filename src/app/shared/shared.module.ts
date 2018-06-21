import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataProvider } from './services/idataprovider';
import { LocalDataProviderService } from './services/localdataprovider.service';
import { FakeDataProviderService } from './services/fakedataprovider.service';
import { Projector } from './services/iprojector';
import { DataProjectorService } from './services/dataprojector.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    // { provide: DataProvider, useClass: LocalDataProviderService }
    { provide: DataProvider, useClass: FakeDataProviderService },
    { provide: Projector, useClass: DataProjectorService }
  ],
  declarations: []
})
export class SharedModule { }
