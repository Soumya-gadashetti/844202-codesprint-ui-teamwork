import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'place',component:PlaceAppointmentComponent},
  {path:'place/:id',component:PlaceAppointmentComponent},
  {path:'view',component:ViewAppointmentComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
