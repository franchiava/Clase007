import { Injectable } from '@angular/core';
import { CreateUserData, user } from './models';
import { BehaviorSubject, Observable, Subject, map, mergeMap, take } from 'rxjs';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { HttpClient } from '@angular/common/http';
import { generateRandomString } from 'src/app/shared/utils/helpers'
import { enviroment } from 'src/environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: user[] = []

  private _users$ = new BehaviorSubject<user[]>([]);

  private users$ = this._users$.asObservable();

  private sendNotificacion$ = new Subject<string>();

  private _isLoading$ = new BehaviorSubject(false);

  public isLoading$ = this._isLoading$.asObservable();

  constructor(private httpClient: HttpClient, private notifier: NotifierService) {
    this.sendNotificacion$.subscribe({
      next: (message) => alert(message),
    })
  }

  loadUser(): void {
    // USER_DB.subscribe({
    //   next: (usuariosFromDb) => this._users$.next(usuariosFromDb)
    // })
    this._isLoading$.next(true);
    this.httpClient.get<user[]>(enviroment.baseApiUrl + '/users').subscribe({
      next: (Response) => {
        // console.log('response: ', Response)
        this._users$.next(Response)
      },
      error: () => {
        this.notifier.showError('No se pudo cargar los usuarios')
      },

      complete: () => {
        this._isLoading$.next(true);

      },

    })
  }

  getUsers(): Subject<user[]> {
    return this._users$
  }

  getUserById(id: number): Observable<user | undefined> {
    return this._users$.pipe(
      map((users) => users.find((u) => u.id === id)), take(1))

  }

  createUser(payload: CreateUserData): void {
    const token = generateRandomString(20)

    this.httpClient.post<user>(enviroment.baseApiUrl + '/users', { ...payload, token })
      .pipe(
        mergeMap((UserCreated) => this._users$.
          pipe(take(1),
            map((arrayActual) => [...arrayActual, UserCreated]))
        )
      )
      .subscribe({
        next: (ArrayActualizado) => {
          this._users$.next(ArrayActualizado)

        }
      })

  }

  updateUserById(id: number, usuarioActualizado: user): void {
    // this._users$.pipe(take(1)).subscribe({
    //   next: (arrayActual) => {
    //     this._users$.next(
    //       arrayActual.map((u) =>
    //         u.id === id
    //           ? { ...u, ...usuarioActualizado }
    //           : u
    //       ))
    //   }
    // })
    this.httpClient.put('http://localhost:3000/users/' + id, usuarioActualizado).subscribe({
      next: (usuarioActualizado) => this.loadUser(),
    })



  }

  deleteUserById(id: number): void {
    const userId = id
    this.httpClient.delete('http://localhost:3000/users/' + userId)
    .pipe(take(1)).subscribe({
      next: (arrayActual) => this.loadUser()
    })
  }
  //   // Punto numero 1. Comunicar con la api y eliminar el usuario 
  //   // Punto numero 2. Actualizar el listado (array de Usuarips)
  //   this.httpClient.delete('http://localhost:3000/users' + id)
  //     .pipe(  //1
  //       // mergeMap(
  //       //   (responseUserDelete) => this.users$.pipe(
  //       //     take(1),
  //       //     map(
  //       //       (arrayActual) => arrayActual.filter((u) => u.id !== id) //2
  //       //     )
  //       //   )
  //       // )
  //     ).subscribe({
  //       next: (arrayActualizado) => this.loadUser(),
  //     })}

  }