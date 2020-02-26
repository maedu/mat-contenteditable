import { NgModule } from '@angular/core';

import { MatContenteditableDirective } from './mat-contenteditable.directive';
import { FormFieldSizerDirective } from './form-field-sizer.directive';

@NgModule({
  imports: [
  ],
  declarations: [ MatContenteditableDirective, FormFieldSizerDirective ],
  exports: [ MatContenteditableDirective, FormFieldSizerDirective ],
})
export class MatContenteditableModule { }
