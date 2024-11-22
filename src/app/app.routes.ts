import { Routes } from '@angular/router';
import {LoginComponent} from "./features/auth/pages/login/login.component";
import {RegisterComponent} from "./features/auth/pages/register/register.component";
import {DashboardComponent} from "./features/dashboard/pages/dashboard/dashboard.component";
import {ReportsPageComponent} from "./features/reports/reports-page/reports-page.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";
import {IrrigationZoneComponent} from "./features/zone/pages/irrigation-zone/irrigation-zone.component";
import {ProfileComponent} from "./features/profile/profile/profile.component";
import {DetailsZoneComponent} from "./features/zone/pages/details-zone/details-zone.component";
import {ZoneRecordComponent} from "./features/zone/components/record-zone/zone-record.component";
import {NotificationsComponent} from "./shared/components/notifications/notifications.component";

export const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'reports', component:ReportsPageComponent},
  {path: 'irrigation-zone', component:IrrigationZoneComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'zone-detail/:id', component:DetailsZoneComponent},
  {path: 'zone-record', component:ZoneRecordComponent},
  {path: 'notifications', component:NotificationsComponent},


  {path: '**', component:PageNotFoundComponent}

];
