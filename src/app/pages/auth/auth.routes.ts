import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from '../profile/profile.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent,
  },
  //  {
  //     path: 'profile',
  //     component: ProfileComponent,
  //   },
];
