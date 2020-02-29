import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseUrl:string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:4446/emps";
   }

   getAll() : Observable<Appointment[]>{
     return this.httpClient.get<Appointment[]>(this.baseUrl)
   }

   getAllById(empId:number) : Observable<Appointment>{
      return this.httpClient.get<Appointment>(`${this.baseUrl}/${empId}`);
   }

   add(app:Appointment) :Observable<Appointment>{
     return this.httpClient.post<Appointment>(this.baseUrl,app);
   }

   save(app:Appointment) :Observable<Appointment>{
    return this.httpClient.put<Appointment>(this.baseUrl,app);
  }

    // delete(empId:number) :Observable<void>{
    //     return this.httpClient.delete<void>(`${this.baseUrl}/${empId}`);
    // }

}

