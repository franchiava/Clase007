import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersFormDialog7Component } from './component/users-form-dialog7/users-form-dialog7.component';
import { user } from './models';
import { Observable, Subject, Subscriber, Subscription, map, takeUntil } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { UserService } from './user.service';


// const ELEMENT_DATA: user[] = 
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnDestroy {
 public users: user [] = [];
 public today = new Date();
 public anotherToday = new Date();


 public destroyed = new Subject<boolean>();

 constructor(private matDialog: MatDialog, private userService: UserService, private notifier: NotifierService,) {
  this.userService.loadUser(),
  this.userService.getUsers().subscribe ({
    next: (v) => {
      this.users = v
    }
  })
 
 }
  ngOnDestroy(): void {}

  onCreateUser(): void {
    const dialogRef = this.matDialog 
    .open(UsersFormDialog7Component)   //abro el modal 
    .afterClosed()     //espero a que se cierre   
    .subscribe(   //hago esto
      { next: (v) => {
        if (v) { 
        this.notifier.showSuccess('Se cargaron los usuarios correctamente')
        this.userService.createUser(v)
        //  this.users = [ 
        //     ...this.users,
        //     {
        //       id: this.users.length + 1,
        //       name: v.name,
        //       surname: v.surname,
        //       email: v.email,
        //       password: v.password,
        //     },
        //   ];
        }
        //   console.log("Recibimos un valor", v)}
        // else {
        //   console.log("Se cancelo") }
        }
    })}

    onDeleteUser(userToDelete: user) :void{
      if (confirm('Esta seguro de eliminar?')) {
        this.userService.deleteUserById(userToDelete.id)
      }
    }

    onEditUser (userToEdit: user) :void{
      this.matDialog 
      .open(UsersFormDialog7Component, { data: userToEdit})  //abro el modal 
      //espero a que se cierre  
      .afterClosed()      
      //hago esto
      .subscribe( 
        { next: (userUpdated) => {

         if(userUpdated) {
         this.userService.updateUserById(userToEdit.id, userUpdated)
          }
        }})}
      
      
      }
      
 
    