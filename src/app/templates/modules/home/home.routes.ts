import { Routes } from "@angular/router";

export const homeRoutes : Routes = [
  {
    path: 'home',
    loadComponent: () => import('../home/home.component').then(m => m.HomeComponent),
  },
  {
        path: 'user-management',
        loadComponent: () => import('../user-management/user-management.component').then(m => m.UserManagementComponent),
        title: 'User Management'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('../dashboard/dashboard.component').then(m => m.DashboardComponent),
    title: 'Dashboard'
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
]
