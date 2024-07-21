import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  // styleUrls: './signup.component.scss'
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm!: FormGroup;
  hidePassword = true;

  constructor(private fb:FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService, 
    private router: Router){

  }
  ngOnInit():void{
    this.signupForm=this.fb.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]],
      confirmPassword:[null,[Validators.required]],
    })
  }

  togglePasswordVisibility(){
    this.hidePassword= !this.hidePassword;
  }

  onSubmit():void{
    const password = this.signupForm.get('password')?.valid;
    const confirmPassword = this.signupForm.get('confirmPassword')?.valid;

    if(password!==confirmPassword){
      this.snackBar.open('Passwords do not match.', 'Close',{duration:5000, panelClass:'error-snackbar'});
      return;
    }
    this.authService.register(this.signupForm.value).subscribe(
      (response)=>{
        this.snackBar.open('Sign up Successfull', 'Close', {duration:5000});
        this.router.navigateByUrl("/login");
      },
      (error)=>{
        this.snackBar.open('Sign Up failed. Please Try again.', 'Close',{duration:5000, panelClass:'error-snackbar'})
      }
    )
  }
}
