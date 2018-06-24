import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { DebugModule } from './debug/debug.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    DebugModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
