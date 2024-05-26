import { Component, OnDestroy, inject } from '@angular/core';
import { AuthHeadComponent } from '../auth-head/auth-head.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ButtonComponent } from '../../../ui/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { Subject, catchError, takeUntil, throwError } from 'rxjs';
import { InputComponent } from '../../../input/input.component';
import { AuthService } from '../../../services/auth.service';
import { AuthPayload } from '../../../core/interfaces.ts/auth-payload';
import { AuthFacade } from '../../../facades';
import { AlertComponent } from '../../../components/alert/alert.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    AuthHeadComponent,
    ReactiveFormsModule,
    JsonPipe,
    FormsModule,
    InputComponent,
    ButtonComponent,
    AlertComponent,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../auth.style.scss'],
})
export class RegisterComponent implements OnDestroy {
  form = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', Validators.required),
  });
  sub$ = new Subject();
  authFacade = inject(AuthFacade);
  router = inject(Router);
  errorMessage: string | null = null;
  successMessagge: string | null = null;

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    this.errorMessage = null;
    this.successMessagge = null;

    const { email, password } = this.form.value as {
      email: string;
      password: string;
    };
    email.trim();
    password.trim();

    const payload: AuthPayload = {
      email,
      password,
    };

    this.authFacade
      .register(payload)
      .pipe(
        takeUntil(this.sub$),
        catchError(({ error }) => {
          this.errorMessage = error.error.message;
          return throwError(() => error.error.message);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.successMessagge = 'you are registered';
          setTimeout(() => {
            this.router.navigate(['/auth']);
          }, 2000);
        }
      });
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
