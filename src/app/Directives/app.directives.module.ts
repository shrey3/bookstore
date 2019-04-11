import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomUsernameValidator } from './app.username.validate.directive'

@NgModule({
  declarations: [
    CustomUsernameValidator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [CustomUsernameValidator]
})
export class CustomDirectivesModule { }
