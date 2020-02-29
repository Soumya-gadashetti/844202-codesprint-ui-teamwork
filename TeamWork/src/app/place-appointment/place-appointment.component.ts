import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-place-appointment',
  templateUrl: './place-appointment.component.html',
  styleUrls: ['./place-appointment.component.css']
})
export class PlaceAppointmentComponent implements OnInit {
  app:Appointment;
   msg:string;
 
  constructor(
    private empService:AppointmentService,
    private actRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    let empId=this.actRoute.snapshot.params.id;
    if(empId){
      this.empService.getAllById(empId).subscribe(
        (data) =>{
          this.app=data;
          
        }
      );

    }else{
      this.app={
        empId:0,
        firstName:'',
        lastName:'',
        age:0,
       mobileNumber:'',
        email:'',
        address:''
      };
     
    
}
  }

    save(){
      let ob:Observable<Appointment>;
        ob=this.empService.add(this.app);
      
      ob.subscribe(
        (Data) =>{
          this.router.navigateByUrl("");
        },
        (errResponse)=> {
          this.msg=errResponse.error;
          
        }
      );
    }
}
