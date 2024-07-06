import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./templates/pages/login/login.component').then(m => m.LoginComponent),
    title: 'Login'
  },
  {
    path: 'register',
    loadComponent: () => import('./templates/pages/signinpage/signinpage.component').then(m => m.SigninpageComponent),
    title: 'Register'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./templates/modules/home/home.component').then(m => m.HomeComponent),
    children: [
      {
        path: '',
        loadChildren: () => import('./templates/modules/home/home.routes').then(m => m.homeRoutes),
      }

    ]
  }
];
