import { Component, OnDestroy, inject } from '@angular/core';
import { InputComponent } from '../../../input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../ui/button/button.component';
import { confirmPasswordValidator } from '../../../core/validators/confirm-password-validators';
import { AlertComponent } from '../../../components/alert/alert.component';
import { AuthFacade } from '../../../facades';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    AlertComponent,
  ],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss', '../../profile/profile.style.scss'],
})
export class PasswordComponent implements OnDestroy {
  authFacade = inject(AuthFacade);
  sub$ = new Subject();

  form = new FormGroup(
    {
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: confirmPasswordValidator }
  );

  submit() {
    this.form.markAllAsTouched();
    console.log('hi');

    if (this.form.invalid) {
      return;
    }

    const password = this.form.value.newPassword as string;
    this.authFacade
      .passwordchange(password)
      .pipe(takeUntil(this.sub$))
      .subscribe(() => {
        this.form.reset();
        setTimeout(() => {
          //pop-up ikneba
          alert('password changed');
        }, 2000);
      });
  }
  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
