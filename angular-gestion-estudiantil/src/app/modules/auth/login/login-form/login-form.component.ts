import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@data/services/api/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent  {

  public cet1= 'assets/images/login/cet1.jpg';
  public fondo= 'assets/images/login/cet1-fondo.jpg';
  public usuario= 'assets/images/login/img_correo.jpg';
  public contra= 'assets/images/login/img_contraseña.jpg';


  public loginForm: FormGroup;
  public loginSubmitted= false;

  constructor(
    private formBuilder: FormBuilder,
    private  authService: AuthService,
    private router: Router
  ){
    this.loginForm= this.formBuilder.group({
      email: ['',
       [
        Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9] {1,3}\])|(([a-zA-Z\.]+\.)+[a-zA-Z]{2,}))$/
            )
        ]
      ],
      password: ['', [Validators.required, Validators.maxLength(12)]]
    });
  }

  get fm() {
    return this.loginForm.controls;
  }

   authenticate(){
    // console.log(this.loginForm.value)
    this.loginSubmitted=true;
    if(!this.loginForm.valid)
    {
      return;
    }
    
      console.log('Authenticated', this.loginForm.value);
      this.router.navigateByUrl('/panel/user');
      this.authService.login(this.loginForm.value).subscribe( r=> {


       console.log(r);
     
   });
       
      
  
    }
  }
   
    // console.log('Authenticated', this.loginForm.value);
    // this.authService.login(this.loginForm.value).subscribe( r=> {
    //   console.log(r);
     
    // });
    

   
   

