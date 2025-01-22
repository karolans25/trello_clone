import { ResolveFn, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorHandler, inject } from '@angular/core';
import { delay, of } from 'rxjs';

export const routes: Routes = [
    {
        path: 'auth',
        title: 'Authentication',
        component: AuthComponent,
        children: [
            { 
                path: 'login',
                title: 'Login',
                component: LoginComponent
            }
        ]
    },
    // {    
    //     path: "old-user-page",
    //     redirectTo: ({ queryParams }) => {      
    //         console.log(queryParams['userId']);
    //         const errorHandler = inject(ErrorHandler);
    //         const userIdParam = queryParams['userId'];      
    //         if (userIdParam !== undefined) {
    //             return `user/${userIdParam}`;
    //         } else {        
    //             errorHandler.handleError(new Error('Attempted navigation to user page without user ID.'));        
    //             return `/not-found`;      
    //         }    
    //     },  
    // },  
    // { 
    //     path: "user/:userId", component: AuthComponent 
    // },
    {
        path: '', redirectTo: 'not-found', pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];

// const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('Child A');
