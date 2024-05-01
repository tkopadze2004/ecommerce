import { Component } from '@angular/core';
import { InputComponent } from '../../../input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [InputComponent,ReactiveFormsModule,ButtonComponent],
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss','../../profile/profile.style.scss']
})
export class PasswordComponent {

form=new FormGroup({
  newPassword:new FormControl(''),
  confirmPassword:new FormControl('')
})
}
