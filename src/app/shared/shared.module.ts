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
import { FileContentGenerator } from './services/interfaces/ifilecontentgenerator';
import { ReportGeneratorService } from './services/reportgenerator.service';

import { ConstraintPipe } from './pipes/constraint.pipe';
import { LogicalPipe } from './pipes/logical.pipe';

import { SettingsModule } from '../settings/settings.module';
import { HelpComponent } from './help/help.component';

@NgModule({
  imports: [
    CommonModule,
    SettingsModule
  ],
  providers: [
    { provide: DataProvider, useClass: LocalDataProviderService },
    // { provide: DataProvider, useClass: FakeDataProviderService },
    { provide: Projector, useClass: DataProjectorService },
    { provide: Selector, useClass: DataSelectorService },
    { provide: Querist, useClass: CamQueristService },
    { provide: FileContentGenerator, useClass: ReportGeneratorService }
  ],
  exports: [
    ConstraintPipe,
    LogicalPipe,
    HelpComponent
  ],
  declarations: [ ConstraintPipe, LogicalPipe, HelpComponent ]
})
export class SharedModule { }
