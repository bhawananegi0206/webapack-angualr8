import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeRecordsComponent } from './employee-records/employee-records.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';

import { Component ,OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import './app.component.scss';
import { Router, ActivatedRoute } from '@angular/router';

const routes: Routes = [
  {path:'',component: MenuComponent},
  {path:'employeerecords', component: EmployeeRecordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule  {


 }
