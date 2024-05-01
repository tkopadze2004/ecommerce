import { Component, inject } from '@angular/core';
import { AuthFacade } from '../../../facades';
import { AsyncPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../ui/button/button.component';
import { InputComponent } from '../../../input/input.component';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [AsyncPipe,ReactiveFormsModule,ButtonComponent,InputComponent],
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss','../../profile/profile.style.scss']
})
export class MyProfileComponent {
  authfacade = inject(AuthFacade);

  user$ = this.authfacade.getUser();

  form=new FormGroup({
    fullName:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required])
  })
}
