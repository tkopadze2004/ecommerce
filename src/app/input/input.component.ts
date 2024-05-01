import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR  } from '@angular/forms';

let uniqId = 1
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  providers:[
{

    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true

}
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})


export class InputComponent implements ControlValueAccessor {

  @Input () type : 'text' | "password" | 'number' | 'email' = 'text'
  @Input () placeholder = ''
  @Input() label = ''


  value  : string = ''
  disabled : boolean = false
  onchange = (value : string) :void=>{}
  ontouched=()=>{}



  get inputId(){
    return `input-${uniqId++}`
  }



  writeValue(value: any): void {
   this.value= value
  //  console.log('wrtie', value);

  }
  registerOnChange(fn: any): void {
this.onchange=fn
// console.log('regitser');

  }

  registerOnTouched(fn: any): void {
this.ontouched=fn
// console.log('tavhed');

  }
  setDisabledState(Disabled: boolean): void {
this.disabled=Disabled
// console.log('doisans');

  }

}
