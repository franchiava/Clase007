import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersFormDialog7Component } from './component/users-form-dialog7/users-form-dialog7.component';
import { user } from './models';
import { UserService } from './useer.service';
import { Observable, Subject, Subscriber, Subscription, map, takeUntil } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';


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

 public semaforoSuscription ?: Subscription;

 public destroyed = new Subject<boolean>();

 constructor(
  private matDialog: MatDialog,

  private userService: UserService,

  private notifier: NotifierService,

  
  @Inject ('IS_DEV') private IsDev: boolean,
){
  this.userService.loadUser(),
  this.userService.getUsers().subscribe ({
    next: (v) => {
      this.users = v
      this.userService.sendNotificacion('Se cargaron los usuarios');
    }
  })
  // console.log(this.IsDev)
 

const MeDevuelveEldinero = new Promise((resolve, reject) => {
 setTimeout(() => {
  
//  reject('El dinero no ha sido devuelto')
},2000)
})

MeDevuelveEldinero
.then((value) => console.log(value))
.catch((error) => alert(error))
.finally(() => {})

const semaforo = new Observable((Subscriber) => {
  let color = 'rojo';
  setInterval(() => {
  if (color === 'rojo') {
    Subscriber.next('rojo');
    color= 'verde'}
    else {
      Subscriber.next('verde');
      color= 'rojo'
      Subscriber.complete()
  }})
  }
)
//Pipe viene de la palabra tuberia
this.semaforoSuscription = semaforo.pipe(
  takeUntil(this.destroyed),
  // map((color) => color.toUpperCase())
)
.subscribe ({
 next: (color) => {console.log(color)},
 error: () => {},
 complete: () => {
  console.log('Se completo')
 },
})

// fetch('https://regres.in/api/users?page=2')
// .then((respuestaDelServidor) => respuestaDelServidor.json())
// .then((data) => console.log(data))
//No me funciono esto por alguna razon

 }
  ngOnDestroy(): void {
    console.log('Se destruyo');
    this.semaforoSuscription?.unsubscribe();

    this.destroyed.next(true);
  }

  onCreateUser(): void {
    const dialogRef = this.matDialog 
    .open(UsersFormDialog7Component)   //abro el modal 
    .afterClosed()     //espero a que se cierre   
    .subscribe(   //hago esto
      { next: (v) => {
        if (v) { 
          this.notifier.showSuccess('Se cargaron los usuarios correctamente')
        
          this.users = [ 
            ...this.users,
            {
              id: this.users.length + 1,
              name: v.name,
              surname: v.surname,
              email: v.email,
              password: v.password,
            },
          ];
         
          console.log("Recibimos un valor", v)}
        else {
          console.log("Se cancelo") }}
    })}

    onDeleteUser(userToDelete: user) :void{
      if (confirm('Esta seguro de eliminar a ?')) {
        this.users = this.users.filter((u) => u.id !== userToDelete.id)
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
          this.users = this.users.map((user) => {
            return user.id === userToEdit.id
            ? userUpdated
            : user
          })
         }

        }})
    }
  }
 
    