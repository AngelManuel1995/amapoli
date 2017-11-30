import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { OurQuery } from "../models/ourQuery";
import 'rxjs/add/operator/map';

@Injectable()

export class AppointmentService{

    constructor(private _http:Http){

    }

    queryRespuesta:any = {};

    getAppointment(query:OurQuery){

        const headerDict = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
          }
  
        const headerObj = {                                                                                                                                                                                 
        headers: new Headers(headerDict), 
        };
          
        let url = "http://amapoli.herokuapp.com/consultas/regla";
        
        return this._http.post(
            url,
            JSON.stringify({  userId: query.userId, description: query.description }), 
            headerObj)
            .map(res => {
                console.log(res.json());
                this.queryRespuesta = res.json();
                res.json();
                return res.json();
            });

    }
}