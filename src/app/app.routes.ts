import { Routes } from '@angular/router';
import { LayoutComponent } from './components';

import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductsComponent } from './pages/products/products.component';

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
        path:'categories',
        component: CategoriesComponent
      },
      {
        path:'product/:id',
        component:ProductsComponent
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
