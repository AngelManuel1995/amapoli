import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions }       from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable(

)

export class AmapoliService{
    people:any[] = [];

    constructor(private _http:Http){

    }

    getPeople(){
      
        const body = {
                        "username":"Juan Agudelo",
                        "password":"123456789"
                     };
        const headers = new Headers({ 'Content-Type': 'application/json; charset=utf8', 'Access-Control-Allow-Origin': '*' });


        let url = "https://amapoli.herokuapp.com/registrar";
        console.log("Servicio listo para usar");

        return this._http.post(url , JSON.stringify({  username: "Juan Agudelo", password: "123456" }))
        .map(res => {
            res.json()
        });

    }

}