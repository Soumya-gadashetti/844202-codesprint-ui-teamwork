import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {
  apps:Appointment[];
  
  errMsg:string;
  
  constructor(private empService :AppointmentService) { }

  ngOnInit() {
    this.loadData();
  }
    loadData(){
      this.apps=null;
      this.errMsg=null;
  
      this.empService.getAll().subscribe(
        (data) =>{ this.apps=data; },
        (err) => {this.errMsg="Sorry Server not reachable!";}
      );

    }
}
