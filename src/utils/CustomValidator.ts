import { AbstractControl, ValidationErrors } from '@angular/forms';

interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}

export class CustomValidator {
  static currencyMin(Minvalue: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const inputVal = Number(control.value.replace(/[^0-9]/g, ''));
      if (inputVal < Minvalue) {
        return { currencyMin: true };
      }
      return null;
    }
  }

  static currencyMax(Maxvalue: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const inputVal = Number(control.value.replace(/[^0-9]/g, ''));
      if (inputVal > Maxvalue) {
        return { currencyMax: true };
      }
      return null;
    }
  }
}
