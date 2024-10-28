import { Routes } from '@angular/router';
import {LoginComponent} from "./features/auth/pages/login/login.component";
import {RegisterComponent} from "./features/auth/pages/register/register.component";
import {DashboardComponent} from "./features/dashboard/pages/dashboard/dashboard.component";
import {ZoneRecordComponent} from "./features/zone/pages/record-zone/zone-record.component";
import {IrrigationZoneComponent} from "./features/zone/pages/irrigation-zone/irrigation-zone.component";


export const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'zone-record', component:ZoneRecordComponent},
  {path: 'irrigation-zone', component:IrrigationZoneComponent},


];
