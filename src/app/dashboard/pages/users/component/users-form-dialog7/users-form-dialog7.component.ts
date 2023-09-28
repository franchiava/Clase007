import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { user } from '../../models';

@Component({
  selector: 'app-users-form-dialog7',
  templateUrl: './users-form-dialog7.component.html',
  styleUrls: ['./users-form-dialog7.component.css']
})
export class UsersFormDialog7Component 
{
  nameControl = new FormControl <string | null> (null,[ 
    Validators.required,
    Validators.minLength(3),])

 surnameControl = new FormControl <string | null>  (null,[ 
  Validators.required]);
 
  emailControl = new FormControl <string | null>  (null,[ 
  Validators.required]);
 
  passwordControl = new FormControl <string | null>  (null, [ 
  Validators.required]) ;

 userForm = new FormGroup( {
   name: this.nameControl,
   surname: this.surnameControl,
   email: this.emailControl,
   password: this.passwordControl,
 })
 

 
 
 constructor(
  private dialogRef: MatDialogRef<UsersFormDialog7Component>,
  @Inject (MAT_DIALOG_DATA) private data?: user ,  
) {
  if (this.data) {
    this.nameControl.setValue(this.data.name);
    this.surnameControl.setValue(this.data.surname);
    this.emailControl.setValue(this.data.email);
    this.passwordControl.setValue(this.data.name)
  }
}






 onSubmit(): void {
  //  alert(JSON.stringify(this.userForm.value)) ASI ESTABA AL PRINCIPIO  1 

  //  const dialogRef = this.dialogRef.close(this.userForm.value) 2

  if (this.userForm.invalid) {
    this.userForm.markAllAsTouched();
  } else {
    this.dialogRef.close(this.userForm.value)
  }


 }
}
