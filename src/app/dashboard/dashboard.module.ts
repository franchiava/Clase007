import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { UsersModule } from './pages/users/users.module';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import {ToolbarComponent} from './layout/toolbar/toolbar.component';
import { UsersDetailComponent } from './pages/component/pages/users-detail/users-detail.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavMenuComponent,
    ToolbarComponent,
    UsersDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    UsersModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
