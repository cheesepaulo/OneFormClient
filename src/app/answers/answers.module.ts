import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AswerListComponent } from './aswer-list/aswer-list.component';
import { AswerNewComponent } from './aswer-new/aswer-new.component';
import { GraphNumberComponent } from './shared/graph-number/graph-number.component';
import { GraphTextComponent } from './shared/graph-text/graph-text.component';
import { GraphBooleanComponent } from './shared/graph-boolean/graph-boolean.component';
import { IndividualDetailsComponent } from './shared/individual-details/individual-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AswerListComponent, AswerNewComponent, GraphNumberComponent, GraphTextComponent, GraphBooleanComponent, IndividualDetailsComponent]
})
export class AnswersModule { }
