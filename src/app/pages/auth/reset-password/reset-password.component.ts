import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthHeadComponent } from '../auth-head/auth-head.component';
import { JsonPipe } from '@angular/common';
import { ButtonComponent } from '../../../ui/button/button.component';
import { InputComponent } from '../../../input/input.component';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [   RouterLink,
    AuthHeadComponent,
    ReactiveFormsModule,
    JsonPipe,
    FormsModule,
    InputComponent,
    ButtonComponent,],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss', '../auth.style.scss'],
})
export class ResetPasswordComponent {
  form = new FormGroup({
    password: new FormControl('', Validators.required),
    confirm: new FormControl('', Validators.required),
  });

  onSubmit() {

    if (this.form.invalid) return;
    // console.log(this.form.value);
    this.form.markAllAsTouched();
  }
}
