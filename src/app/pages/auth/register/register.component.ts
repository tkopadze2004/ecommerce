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
import { RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { InputComponent } from '../../../input/input.component';
import { AuthService } from '../../../services/auth.service';
import { AuthPayload } from '../../../core/interfaces.ts/auth-payload';
import { AuthFacade } from '../../../facades';

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

  onSubmit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

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
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        console.log(res);
      });
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
