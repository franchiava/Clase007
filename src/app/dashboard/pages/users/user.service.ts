import { Injectable } from '@angular/core';
import { CreateUserData, user } from './models';
import { BehaviorSubject, Observable, Subject, delay, map, observable, of, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';

const USER_DB:  Observable <user[]> = of(
[
  {
    id: 1,
    name: 'Franco',
    surname: 'Chiavassa',
    email: 'fraancotiago@gmail.com',
    password: 'luispedro',
  }, 
  {
    id: 2,
    name: 'Franco',
    surname: 'Chiavassa',
    email: 'fraancotiago@gmail.com',
    password: 'luispedro',
  }]).pipe(delay(1000))

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: user[] = []

  private users$ = new BehaviorSubject <user[]>([]);

  private sendNotificacion$ = new Subject <string>();

  constructor()
  { 
  this.sendNotificacion$.subscribe ({
    next: (message) => alert (message),
  })
  }

  sendNotificacion (notificacion: string) : void {
    this.sendNotificacion$.next(notificacion);
  }
  //Primero cargo los usuarios y luego me subscribo
  loadUser() : void {
    USER_DB.subscribe({
      next: (usuariosFromDb) => this.users$.next(usuariosFromDb)
    })
    }

   getUsers() : Subject<user[]> {
    return this.users$
   } 

   getUserById(id: number): Observable<user | undefined> {
      return this.users$.pipe(
        map((users) => users.find((u) => u.id === id)),take(1))

   }

   createUser(user: CreateUserData): void {
    this.users$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
        this.users$.next([...arrayActual,
        {...user,id: arrayActual.length +1}]);
        
      }
    })
   }

   updateUserById (id:number , usuarioActualizado: user): void {
    this.users$.pipe(take(1)).subscribe({
    next: (arrayActual) => {
      this.users$.next(
        arrayActual.map((u) => 
        u.id === id
        ? {...u, ...usuarioActualizado} 
        : u
      ))
    }})
   }

   deleteUserById (id:number) : void {
    this.users$.pipe(take(1)).subscribe({
      next: (arrayActual) => {
      this.users$.next(arrayActual.filter((u) => u.id !== id))
    }})}

}
