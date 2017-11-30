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

       /* console.log("On OnInit");
        this._amapoliService.getPeople().subscribe(
            data => 
            {
                console.log("Esta es la data que nos llega" + data);
            },
            error => 
            {
                console.log(error);    
            }
        );*/
        
    }
}