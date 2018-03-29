import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent, SimpleFormControl} from './app.component';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, SimpleFormControl
  ],
  imports: [
    BrowserModule,
      ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
