import { Component, OnInit } from "@angular/core";
import { ActivatedRoute}    from "@angular/router";
import { AppointmentService } from "../../services/appointment.service";
import { OurQuery }         from "../../models/ourQuery";

@Component({
    selector:"app-appointment",
    templateUrl:"./appointment.component.html"
})

export class AppointmentComponent implements OnInit{
    
    ourQuery:OurQuery = {
        userId:null,
        description:""
    }

    queryRespuesta:any = {};
    queryMostrar:any;
    

    constructor(private _activatedRoute:ActivatedRoute,
                private _appointmentService:AppointmentService){
    }

    ngOnInit() {
        this._activatedRoute.params
        .map(params => params['id'])
        .subscribe(id => {
            this.ourQuery.userId = parseInt(id);
            this.ourQuery.description = " ";
            console.log(this.ourQuery);
            this._appointmentService.getAppointment(this.ourQuery).subscribe(
                data => {
                    this.queryRespuesta = data.description;
                    this.queryMostrar = this.queryRespuesta.split("_");
                    console.log(this.queryMostrar);
                    this.queryMostrar = this.queryMostrar.join(" ");
                    console.log(this.queryMostrar);

                    console.log(data);
            },
                error =>{
                    console.log(error);
            });
        });
        
    }

}