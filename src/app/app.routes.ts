import { Routes } from '@angular/router';
import { LayoutComponent } from './components';

import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';

export const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then(m => m.authRoutes)
      },
      {
        path:'categories/:id',
        component: CategoriesComponent
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/profile/profile.routes').then(m => m.profileRoutes),
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
