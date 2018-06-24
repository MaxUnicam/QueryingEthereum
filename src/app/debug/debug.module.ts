import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleDebugComponent } from './console-debug/console-debug.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ConsoleDebugComponent
  ],
  declarations: [ConsoleDebugComponent]
})
export class DebugModule { }
