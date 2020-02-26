import { NgModule } from '@angular/core';

import { MatCkeditorDirective } from './mat-ckeditor.directive';
import { MatCkeditorBalloonDirective } from './mat-ckeditor-balloon.directive';

@NgModule({
  imports: [
  ],
  declarations: [ MatCkeditorDirective, MatCkeditorBalloonDirective ],
  exports: [ MatCkeditorDirective, MatCkeditorBalloonDirective ],
})
export class MatCkeditorModule { }
