import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { QueristModule } from './querist/querist.module';
import { DebugModule } from './debug/debug.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    QueristModule,
    DebugModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
