import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../../input/input.component';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [ReactiveFormsModule,InputComponent,ButtonComponent],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss','../../profile/profile.style.scss']
})
export class AddressComponent {

  form=new FormGroup({
    streetAddress:new FormControl('',Validators.required),
    City:new FormControl('',Validators.required),
    State:new FormControl('',Validators.required),
    zipCode:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required)

  })
}
