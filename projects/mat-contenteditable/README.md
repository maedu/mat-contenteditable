# Angular contenteditable directive for Angular forms and Material Design

## What is this library

This is micro Angular v6+ contenteditable directive for compatibility with Angular forms.
It just implements [ControlValueAccessor](https://angular.io/api/forms/ControlValueAccessor) for this purpose.

### What is this fork

It implements MatFormFieldControl to support Angular Material

## Install

You can just copy and paste this [directive](projects/mat-contenteditable/src/lib/mat-contenteditable.directive.ts) or install it from npm:

```bash
npm install mat-contenteditable --save
```

## Usage

Import and add `MatContenteditableModule` to your project:

```ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatContenteditableModule } from 'mat-contenteditable';

// ...

@NgModule({
  // ...
  imports: [
    // Import this module to get available work angular with `contenteditable`
    MatContenteditableModule,
    // Import one or both of this modules
    FormsModule,
    ReactiveFormsModule
  ]

// ...

})
```

And then you can to use it in [template-driven forms](https://angular.io/guide/forms)
or [reactive forms](https://angular.io/guide/reactive-forms) like this:

```ts
// In your component
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export class MyComponent implements OnInit {
  templateDrivenForm = 'This is contenteditable text for template-driven form';
  myControl = new FormControl;

  ngOnInit() {
    this.myControl.setValue(`This is contenteditable text for reactive form`);
  }
}
```

```html
<form #testForm="ngForm">
  <p
    contenteditable="true"
    name="myFormName"
    [(ngModel)]="templateDrivenForm"
    ></p>
</form>

<pre>
  {{ testForm.value | json }}
</pre>

<hr>

<p contenteditable="true" [formControl]="myControl"></p>

<pre>
  {{ myControl.value | json }}
</pre>
```

## Options

With `contenteditable` directive you can pass optional `@Input` value for `propValueAccessor`:

```html
<p
  contenteditable="true"
  propValueAccessor="textContent"
  [formControl]="myControl"
  ></p>
```

In `ContenteditableDirective` this value use like this:

```ts
this.elementRef.nativeElement[this.propValueAccessor]
```

By default it using `innerHTML`.
