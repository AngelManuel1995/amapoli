import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LoginComponent }  from "../app/components/login/login.component";
import { SignupComponent } from "../app/components/signup/signup.component";
import { AmapoliService }  from "../app/services/amapoli.service";
import { AppointmentComponent } from "../app/components/appointment/appointment.component";
import { AppComponent } from './app.component';
import { NavbarComponent } from "../app/components/shared/navbar/navbar.component";
import { AppointmentService } from "../app/services/appointment.service";

import { APP_ROUTING } from '../app/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AppointmentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [AmapoliService,
              AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
