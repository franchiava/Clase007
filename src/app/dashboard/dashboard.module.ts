import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { UsersModule } from './pages/users/users.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    UsersModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
