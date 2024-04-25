import { Component, OnInit, inject } from '@angular/core';
import { AuthHeadComponent } from '../auth-head/auth-head.component';
// import { InputComponent } from '../../../input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';
import { ButtonComponent } from '../../../ui/button/button.component';
import { log } from 'console';
import { RouterLink } from '@angular/router';
// import { AuthFacade } from '../../../facades/auth.facade';
// import { authPayload } from '../../../core/interfaces.ts/auth-payload';
import { Subject, catchError, takeUntil, throwError } from 'rxjs';
// import { AlertComponent } from '../../../alert/alert.component';
import { Router } from 'express';
import { InputComponent } from '../../../input/input.component';
// import { AlertComponent } from '../../../alert/alert.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AuthHeadComponent,
    InputComponent,
    ReactiveFormsModule,
    JsonPipe,
    ButtonComponent,
    RouterLink,
    // AlertComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../auth.style.scss'],
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });
//   authfacade = inject(AuthFacade);
//   router = inject(Router);
//   // sub$=new Subject()

//   errorMessage: string | null = null;
//   successMessagge: string | null = null;
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

//     const { email, password } = this.form.value as {
//       email: string;
//       password: string;
//     };

//     email.trim();
//     password.trim();

//     const payload: authPayload = {
//       email,
//       password,
//     };

//     this.authfacade
//       .login(payload)
//       .pipe(
//         // takeUntil(this.sub$),

//         catchError(({ error }) => {
//           this.errorMessage = error.error.message;
//           return throwError(() => error.error.message);
//         })
//       )

//       .subscribe((res) => {
//         console.log(res);
//         if (res) {
//           this.successMessagge = 'login successful';
//           setTimeout(() => {
//             this.router.navigate(['/']);
//           }, 2000);
//         }
//       });
    }
//   // ngOnDestroy(): void {
//   //   this.sub$.next(null)
//   //   this.sub$.complete()
//   // }
}
