import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LoginComponent }  from "../app/components/login/login.component";
import { SignupComponent } from "../app/components/signup/signup.component";
import { AmapoliService }  from "../app/services/amapoli.service";

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
    FormsModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [AmapoliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
