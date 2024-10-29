import { Routes } from '@angular/router';
import {LoginComponent} from "./features/auth/pages/login/login.component";
import {RegisterComponent} from "./features/auth/pages/register/register.component";
import {DashboardComponent} from "./features/dashboard/pages/dashboard/dashboard.component";
import {ProfileComponent} from "./features/profile/profile/profile.component";


export const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'profile', component:ProfileComponent},
];
