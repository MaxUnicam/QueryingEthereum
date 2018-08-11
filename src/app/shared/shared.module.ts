import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataProvider } from './services/interfaces/idataprovider';
import { LocalDataProviderService } from './services/localdataprovider.service';
import { FakeDataProviderService } from './services/fakedataprovider.service';
import { Projector } from './services/interfaces/iprojector';
import { DataProjectorService } from './services/dataprojector.service';
import { Selector } from './services/interfaces/iselector';
import { DataSelectorService } from './services/dataselector.service';
import { Querist } from './services/interfaces/iquerist';
import { CamQueristService } from './services/camquerist.service';

import { ConstraintPipe } from './pipes/constraint.pipe';
import { LogicalPipe } from './pipes/logical.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    // { provide: DataProvider, useClass: LocalDataProviderService },
    { provide: DataProvider, useClass: FakeDataProviderService },
    { provide: Projector, useClass: DataProjectorService },
    { provide: Selector, useClass: DataSelectorService },
    { provide: Querist, useClass: CamQueristService }
  ],
  exports: [
    ConstraintPipe,
    LogicalPipe
  ],
  declarations: [ ConstraintPipe, LogicalPipe ]
})
export class SharedModule { }
