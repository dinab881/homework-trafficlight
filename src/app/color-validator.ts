/**
 * Created by dina on 19.06.18.
 */
import {AbstractControl} from '@angular/forms';
/*export class PasswordValidation {
    static MatchPassword(AC: AbstractControl) {
        const pwd = AC.get('pwd'); // to get value in input tag
        const confirmPwd = AC.get('confirmPwd'); // to get value in input tag
        // If FormControl objects don't exist, return null
        if (!pwd || !confirmPwd) return null;
        //If they are indeed equal, return null
        if (pwd.value === confirmPwd.value) {
            return null;
        }
        //Else return false
        return {
            mismatch: true
        };
    }
}*/

/*export function ColorValidator(c: AbstractControl) {

  return g.get('password').value === g.get('confirmPassword').value
    ? null : {'mismatch': true};
}*/


export const ColorValidator = (color: string) => {
  return (c: AbstractControl) => {
    if (c.value === color) {
      return { 'badcolor': true };
    }
    /*var num = +control.value;
    if(isNaN(num) || num < min){
      return {
        minValue: {valid: false}
      };
    }*/
    return null;
  };
};
