import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";
import { AmapoliService }    from "../../services/amapoli.service";
import { Router } from "@angular/router";
@Component({
    selector:"app-login",
    templateUrl:"./login.component.html"
})

export class LoginComponent implements OnInit{

    user:any = {
        userId:null,
        name:"",
        password:""
    };
    noUserMessage:string;
    
    constructor(private _amapoliService:AmapoliService,
                private _router:Router){
        
    }
    
    ngOnInit(){
        

    }

    logIn(user:string, password:string){
        this.user.name = user;
        this.user.password = password;

        this._amapoliService.logIn(this.user).subscribe(
            data => {
                this.user.userId = data;
                console.log(this.user);
                this._router.navigate(['/appointment',this.user.userId]);
        },
            error => {
            console.error(error);
            this.noUserMessage = "Error el usuario no existe"

        });
    }
    
}