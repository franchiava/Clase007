import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersDetailComponent } from '../component/pages/users-detail/users-detail.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'users',
        component: UsersComponent
    },
    {
        path: ':id',
        component: UsersDetailComponent
    },
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class UsersRoutingModule { }