import { ValidatorFn, AbstractControl, ValidationErrors, FormControl } from "@angular/forms";

export function   

noHomeroValidator(): ValidatorFn {
    //Abstract control significa que puede ser un FormARRAY, FormControl o FormGroup
    return (control: AbstractControl): ValidationErrors | null => {
        if (control instanceof FormControl) {
        if (control.value.includes('homero'))
         return {
         noHomero: true,
         }
         }
  
      return null
      // Null seria el caso en el que el control sea el valido(es como decir no hay nigun error)
    }; 
  }