import { Component, OnInit } from "@angular/core";
import { AmapoliService }    from "../../services/amapoli.service";
@Component({
    selector:"app-login",
    templateUrl:"./login.component.html"
})

export class LoginComponent implements OnInit{


    constructor(private _amapoliService:AmapoliService){
        
    }
    
    ngOnInit(){
        
    }
}