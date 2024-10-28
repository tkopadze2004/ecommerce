import { Component, OnDestroy, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthHeadComponent } from '../auth-head/auth-head.component';
import { JsonPipe } from '@angular/common';
import { ButtonComponent } from '../../../ui/button/button.component';
import { InputComponent } from '../../../input/input.component';
import { AuthFacade } from '../../../facades';
import { Subject, catchError, takeUntil, throwError } from 'rxjs';
import { AlertComponent } from '../../../components/alert/alert.component';

@Component({
  selector: 'app-reset-password',
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
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss', '../auth.style.scss'],
})
export class ResetPasswordComponent implements OnDestroy {
  form = new FormGroup({
    oobCode: new FormControl('', Validators.required),
    newPassword: new FormControl('', Validators.required),
  });

  authfacade = inject(AuthFacade);
  ActivatedRoute = inject(ActivatedRoute);
  sub$ = new Subject();

  oobCode: string | null = null;
  errorMessage: string | null = null;
  successMessagge: string | null = null;
  router = inject(Router);

  ngOnInit(): void {
    this.errorMessage = null;
    this.successMessagge = null;
    this.ActivatedRoute.queryParams
      .pipe(takeUntil(this.sub$))
      .subscribe((params) => {

        if (params['oobCode']) {
          this.form.patchValue({ oobCode: params['oobCode'] });
        }
      });
  }
  resetPassword() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const { oobCode, newPassword } = this.form.value as {
      oobCode: string;
      newPassword: string;
    };

    this.authfacade
      .resetPassword(oobCode, newPassword)
      .pipe(
        takeUntil(this.sub$),
        catchError(({ error }) => {
          this.errorMessage = error.error.message;
          return throwError(() => error.error.message);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.successMessagge =
            'Password successfully reset,redirecting to login page';
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
