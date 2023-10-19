import { Injectable } from "@angular/core";
import { LoginPayload } from "./models";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { user } from "../dashboard/pages/users/models";
import { NotifierService } from "../core/services/notifier.service";
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Injectable({ providedIn: 'root' })
export class AuthService {
    private _authUser$ = new BehaviorSubject<user | null>(null);
    public authUser$ = this._authUser$.asObservable();

    constructor(private notifier: NotifierService, private router: Router, private httpClient: HttpClient) { }

    isAuthenticated(): Observable<boolean> {
        // return this.authUser$.pipe(
        //     map((user) => !!user),
        //     take(1))
        return this.httpClient.get<user[]>('http://localhost:3000/users' ,{
            params: {
                token: localStorage.getItem('token') || '',
            }
        }).pipe(
            map((userResult) => {
                return !!userResult.length
            })
        )
    }

    login(payload: LoginPayload): void {

        this.httpClient.get<user[]>('http://localhost:3000/users', {
            params: {
                email: payload.email || '',
                password: payload.password || '',
            }
        }).subscribe({
            next: (response) => {
                if (response.length) {
                    const authUser = response[0];
                    this._authUser$.next(authUser);
                    this.router.navigate(['/dashboard'])
                    localStorage.setItem('token', authUser.token);
                } else {
                    this.notifier.showError('Usuario incorrecto')
                    this._authUser$.next(null);
                }
            },
            error: (err) => {
                if (err instanceof HttpErrorResponse)
                {
                if (err.status === 500){}
                }
            
                this.notifier.showError('Ocurrio un error inesperado')
            }
            
        })
        
        // const MOCK_USER: user =
        //  {   id: 34,
        //     name: 'Mockname',
        //     surname: 'Surmock',
        //     email: 'mock@EmailValidator.com',
        //     password: '123456',}

        // if(payload.email === MOCK_USER.email && payload.password === MOCK_USER.password){
        //    this._authUser$.next(MOCK_USER);
        //    this.router.navigate(['/dashboard'])
        // }
        // else{
        //     this.notifier.showError('Usuario incorrecto')
        //     this._authUser$.next(null);
        // }
    }
}