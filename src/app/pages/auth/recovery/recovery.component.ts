import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AuthHeadComponent } from '../auth-head/auth-head.component';
// import { InputComponent } from '../../../input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ButtonComponent } from '../../../ui/button/button.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../../input/input.component';
import { AuthFacade } from '../../../facades';
import { Subject, catchError, takeUntil, throwError } from 'rxjs';
import { AlertComponent } from '../../../components/alert/alert.component';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [
    AuthHeadComponent,
    InputComponent,
    ReactiveFormsModule,
    JsonPipe,
    ButtonComponent,
    RouterLink,
    AlertComponent,
  ],
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss', '../auth.style.scss'],
})
export class RecoveryComponent implements OnDestroy {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  authfacade = inject(AuthFacade);
  sub$ = new Subject();
  errorMessage: string | null = null;
  successMessagge: string | null = null;
  sendLink() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.errorMessage = null;
    this.successMessagge = null;

    this.authfacade
      .sendOobCode(this.form.value.email as string)
      .pipe(
        takeUntil(this.sub$),
        catchError(({ error }) => {
          this.errorMessage = error.error.message;
          return throwError(() => error.error.message);
        })
      )
      .subscribe((res) => {
        if(res){
          this.successMessagge='Email sent,check your inbox'
         };
      });
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
