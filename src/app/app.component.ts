import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-mat-contenteditable';
  templateDrivenForm = 'This is <div> contenteditable text for template-driven form';
  myControl = new FormControl;

  ngOnInit() {
    this.myControl.setValue(`This is <p> contenteditable text for reactive form`);
  }
}
