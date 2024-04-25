import { Component, OnInit, inject } from '@angular/core';
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
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../../input/input.component';
import { AuthFacade } from '../../../facades';
import { AuthPayload } from '../../../core/interfaces.ts/auth-payload';
import { AlertComponent } from '../../../components/alert/alert.component';
import { catchError, throwError } from 'rxjs';

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
    AlertComponent
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
   router =inject(Router)
  authFacade = inject(AuthFacade);
  errorMessage:string|null= null
  successMessagge: string | null=null
  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    this.errorMessage= null
    this.successMessagge =null
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

    this.authFacade.login(payload)
    .pipe(
      catchError(({error})=>{
        this.errorMessage=error.error.message
        return throwError(()=>error.error.message)
      })
    )
    .subscribe((res) => {
      console.log(res);
      if(res){
        this.successMessagge='login successful'
        setTimeout(() => {
        this.router.navigate(['/'])
        }, 2000);
      }
    });
  }
}
