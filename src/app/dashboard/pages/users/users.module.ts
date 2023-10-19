import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersFormDialog7Component } from './component/users-form-dialog7/users-form-dialog7.component';
import { UsersTableComponent } from './component/users-table/users-table.component';
import { isFormRecord } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './user.service';



@NgModule({
  declarations: [
    UsersComponent,
    UsersFormDialog7Component,
    UsersTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    UsersRoutingModule,
  ],
  exports: [
    UsersComponent,
  ],
  
  providers: [
       [UserService]
    ],
})

export class UsersModule { }
