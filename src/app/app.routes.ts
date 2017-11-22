import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../app/components/login/login.component";
import { SignupComponent } from "../app/components/signup/signup.component";

const APP_ROUTES : Routes = [
    {path:"login", component:LoginComponent},
    {path:"signup", component:SignupComponent},
    {path:"**", pathMatch:'full', redirectTo:'login'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);