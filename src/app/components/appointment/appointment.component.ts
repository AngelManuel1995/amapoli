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
    newOurQuery:OurQuery={
        userId:null,
        description:""   
    }
    diagnosis:string;
    treatment:string;

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
//console.log(this.ourQuery);
            this._appointmentService.getAppointment(this.ourQuery).subscribe(
                data => {
                    this.queryRespuesta = data.description;
                    this.queryMostrar = this.queryRespuesta.split("_");
                    this.queryMostrar = this.queryMostrar.join(" ");
       
            },
                error =>{
                    console.log(error);
            });
        });
        
    }
    nextAppointment(response:string){
        //console.log(response);
        //console.log(this.queryRespuesta);
       
        this.newOurQuery.userId = 56;
        this.newOurQuery.description = response + this.queryRespuesta;

        this._appointmentService.getAppointment(this.newOurQuery).subscribe(
            data => {
                this.diagnosis = data.diagnosis;
                this.treatment = data.treatment;
                this.queryRespuesta = data.description;
                console.log(this.queryRespuesta);
                this.queryMostrar = data.description;
                this.queryMostrar = this.queryMostrar.split("_");
                this.queryMostrar = this.queryMostrar.join(" ");

                console.log(data);
                console.log(response + data.description);
                let consultar = response + data.description;
                this.newOurQuery.description = consultar;
             //   this.newOurQuery.userId = data.id;
               // this.newOurQuery.description = data.description;
                //console.log("Undefined?");
                //console.log(this.newOurQuery);

        }, error => {
                console.log(error);
        });
    }



}