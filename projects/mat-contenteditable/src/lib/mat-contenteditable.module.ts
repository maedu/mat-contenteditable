import { NgModule } from '@angular/core';

import { MatContenteditableDirective } from './mat-contenteditable.directive';
import { MatCkeditorDirective } from './mat-ckeditor.directive';
import { MatCkeditorBalloonDirective } from './mat-ckeditor-balloon.directive';

@NgModule({
  imports: [
  ],
  declarations: [ MatContenteditableDirective, MatCkeditorDirective, MatCkeditorBalloonDirective ],
  exports: [ MatContenteditableDirective, MatCkeditorDirective, MatCkeditorBalloonDirective ],
})
export class MatContenteditableModule { }
