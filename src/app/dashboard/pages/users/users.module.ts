import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersFormDialog7Component } from './component/users-form-dialog7/users-form-dialog7.component';
import { UsersTableComponent } from './component/users-table/users-table.component';
import { isFormRecord } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UserService } from './user.service';
import { UsersDetailComponent } from './component/users-detail/users-detail.component';



@NgModule({
  declarations: [
    UsersComponent,
    UsersFormDialog7Component,
    UsersTableComponent,
    UsersDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
  ],
  exports: [UsersComponent,],
  providers: [[UserService]],
})

export class UsersModule { }
