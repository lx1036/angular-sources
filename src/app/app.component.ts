import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
    selector: 'simple-form-control',
    template: `
     <input [formControl]="control">
     
     <p>Value: {{ control.value }}</p>
     <p>Validation status: {{ control.status }}</p>
     
     <button (click)="setValue()">Set value</button>
  `,
})
export class SimpleFormControl {
    control: FormControl = new FormControl('value', Validators.minLength(2));

    setValue() { this.control.setValue('new value'); }
}


@Component({
  selector: 'app-root',
    template: `
      <simple-form-control></simple-form-control>
    `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
