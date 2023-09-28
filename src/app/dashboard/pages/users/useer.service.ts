import { Injectable } from '@angular/core';
import { user } from './models';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: user[] = [
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
    }
  ];

  private users$ = new BehaviorSubject <user[]>([]);

  private sendNotificacion$ = new Subject <string>();

  constructor() { 
  this.sendNotificacion$.subscribe ({
    next: (message) => alert (message),
  })
  }
  sendNotificacion (notificacion: string) : void {
    this.sendNotificacion$.next(notificacion);
  }
  //Primero cargo los usuarios y luego me subscribo
  loadUser() : void {
    this.users$.next(this.users)
  }

   getUsers() : Subject<user[]> {
    return this.users$
   } 

   createUser(user: user): void {
    this.users = [
      ...this.users, 
      user
    ]
   }
}
