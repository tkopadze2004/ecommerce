import { Component, inject } from '@angular/core';
import { AuthHeadComponent } from '../auth-head/auth-head.component';
// import { InputComponent } from '../../../input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ButtonComponent } from '../../../ui/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { InputComponent } from '../../../input/input.component';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [AuthHeadComponent,InputComponent, ReactiveFormsModule,JsonPipe,ButtonComponent,RouterLink],
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss', '../auth.style.scss'],
})
export class RecoveryComponent {
  form=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
  })

  router=inject(Router)

  onSubmit() {

    // console.log(this.form.value);
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return
    };
    this.router.navigate(['/auth/resetpassword']);

  }
}
