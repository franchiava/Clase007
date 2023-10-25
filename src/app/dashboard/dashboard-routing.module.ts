import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from "./pages/products/products.component";
import { UsersComponent } from "./pages/users/users.component";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { CountComponent } from "./count/count/count.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'users',
                component: UsersComponent,
                loadChildren: () => import('./pages/users/users.module').then((m) => m.UsersModule)
            },
            {
                path: 'categories',
                component: CategoriesComponent,
                loadChildren: () => import('./pages/categories/categories.module').then((m) => m.CategoriesModule)
            },
            {
                path: 'count',
                component: CountComponent,
                loadChildren: () => import('./count/count/count.module').then((m) => m.CountModule)
            },
            {
                path: 'products',
                component: ProductsComponent,
                loadChildren: () => import('./pages/products/products.module').then((m) => m.ProductsModule)
            },
            {
                path: '**',
                redirectTo: 'home'
            }
        ])
    ],

    exports: [
        RouterModule,
    ]
})
export class DashboardRoutingModule { }