import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AswerListComponent } from './aswer-list/aswer-list.component';
import { AswerNewComponent } from './aswer-new/aswer-new.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AswerListComponent, AswerNewComponent]
})
export class AnswersModule { }
