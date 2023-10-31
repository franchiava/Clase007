import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountComponent } from './count.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CountComponent}]),
    SharedModule
  ]
})
export class CountModule { }
