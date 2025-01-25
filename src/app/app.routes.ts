import { ResolveFn, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorHandler, inject } from '@angular/core';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { ForgotPasswordComponent } from './auth/pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './auth/pages/reset-password/reset-password.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Authentication',
        component: AuthComponent,
        children: [
          {
            path: '', redirectTo: 'login', pathMatch: 'full'
          },
          {
              path: 'login',
              title: 'Login',
              component: LoginComponent
          },
          {
            path: 'register',
            title: 'Register',
            component: RegisterComponent
          },
          {
            path: 'forgot-password',
            title: 'Forgot Password',
            component: ForgotPasswordComponent
          },
          {
            path: 'reset-password',
            title: 'Reset Password',
            component: ResetPasswordComponent
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
    { path: '**', component: PageNotFoundComponent }
];

// const resolvedChildATitle: ResolveFn<string> = () => Promise.resolve('Child A');
