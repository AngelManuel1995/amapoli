import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions }       from "@angular/http";
import 'rxjs/add/operator/map';
import { User } from "../models/user";

@Injectable(

)

export class AmapoliService{
  

    constructor(private _http:Http){

    }
    userRespuesta:User;

    createUser(user:User){

        const headerDict = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
        }

        const headerObj = {                                                                                                                                                                                 
          headers: new Headers(headerDict), 
        };

        let url = "https://amapoli.herokuapp.com/registrar";
        console.log("Servicio listo para usar");

        return this._http.post(
            url , 
            JSON.stringify({  username: user.name, password: user.password }),
            headerObj
        )
        .map(res => {
            console.log(res.json());
            this.userRespuesta = res.json();
            res.json()
            return res.json();
        });

    }

}
