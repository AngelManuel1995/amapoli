import { Component, OnInit } from "@angular/core";
import { User }              from "../../models/user";
import { AmapoliService }    from "../../services/amapoli.service";

@Component({
    selector:"app-signup",
    templateUrl:"./signup.component.html"
})

export class SignupComponent implements OnInit{

    user:User = {
        name:"",
        password:""
    };

    constructor(private _amapoliService:AmapoliService){
        
    }

    ngOnInit(){

    }

    createUser(user:string, password:string, passwordConfirmation:string ){
        this.user.name = user;
        this.user.password = passwordConfirmation;
        console.log(this.user);

        this._amapoliService.createUser(this.user).subscribe(
            data => 
            {
                alert("Ingresado exitosamente");
            },
            error => 
            {
                console.error("Ya está registrado");
            }
        );


    }

      /* console.log("On OnInit");
       */

}