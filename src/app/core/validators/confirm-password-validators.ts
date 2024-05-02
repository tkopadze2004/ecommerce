import { AbstractControl, ValidationErrors } from "@angular/forms";

export const confirmPasswordValidator=(control:AbstractControl) : ValidationErrors |null => {

  const newPassword = control.get('newPassword');
  const confirmPassword = control.get('confirmPassword');

  return newPassword && confirmPassword && newPassword.value !== confirmPassword.value ? { confirmPassword: true } : null
}
