import { FormGroup } from '@angular/forms';

export function milestoneDomain (emailControl: string, passwordControlName: any, passwordRepeatControlName: any){
  return (formGroup: FormGroup) => {
		// Asignamos dos controladores a nuestros valores por param

    
    const control = formGroup.controls[emailControl];

/*    if(control.errors && !control.errors['mustContainDomain']  && !control.errors['mustContainName']  && !control.errors['mustBeLarger']){
    return;
   }
 */

    const domainValue = control.value.split('@');
    if ( domainValue[1] !== 'milestones.com') {
      control.setErrors({ mustContainDomain: true });
    } else if(domainValue[0] == ""){
        control.setErrors({mustContainName: true})
    } else if(domainValue[0].length <= 4){
        control.setErrors({mustBeLarger: true})
    }
    
    else {
      control.setErrors(null);
    }

	// Asignamos dos controladores a nuestros valores por param
  const passwordControl = formGroup.controls[passwordControlName];
  const passwordRepeatControl = formGroup.controls[passwordRepeatControlName];
  //  Control de errores

  if (passwordRepeatControl.errors && !passwordRepeatControl.errors['passwordMatch']) {
    return;
  }
  // Setter Errores
  if (passwordControl.value !== passwordRepeatControl.value) {
      passwordRepeatControl.setErrors({ passwordMatch: true });
  } else {
      passwordRepeatControl.setErrors(null);
  }



  };
}

/* export function comparePassword (passwordControlName: any, passwordRepeatControlName: any){
  return (formGroup: FormGroup) => {
		// Asignamos dos controladores a nuestros valores por param
    const passwordControl = formGroup.controls[passwordControlName];
    const passwordRepeatControl = formGroup.controls[passwordRepeatControlName];
		//  Control de errores
    if (passwordRepeatControl.errors && !passwordRepeatControl.errors['passwordMatch']) {
      return;
    }
		// Setter Errores
    if (passwordControl.value !== passwordRepeatControl.value) {
        passwordRepeatControl.setErrors({ passwordMatch: true });
    } else {
        passwordRepeatControl.setErrors(null);
    }
   
  };
} */