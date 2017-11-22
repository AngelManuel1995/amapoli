import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from "../app/components/login/login.component";
import { SignupComponent } from "../app/components/signup/signup.component";

import { AppComponent } from './app.component';

import { APP_ROUTING } from '../app/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
