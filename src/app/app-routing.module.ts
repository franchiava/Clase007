import {NgModule} from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { UsersDetailComponent } from './dashboard/pages/component/pages/users-detail/users-detail.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'users',
                children: [
                    {
                    path: '',
                    component: UsersComponent
                    },
                    {
                        path: ':id',
                        component: UsersDetailComponent
                    },
                ]
            },
            {
                path: '**',
                redirectTo: 'home'
            },
        ]},
        
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'register',
                component: RegisterComponent,
            },
            {
                path: '**',
                component: LoginComponent,
            },
        ]
    },
    {
        path: '**',
        redirectTo: '/auth'
    }]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}