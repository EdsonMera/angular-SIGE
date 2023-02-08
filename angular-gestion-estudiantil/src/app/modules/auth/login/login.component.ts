import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public ipn= 'assets/images/login/ipn.jpg';
 

  // public data= CONST_LOGIN_PAGE;
  // public loginForm;
  
  // // public loginForm: {
  // //   email: {
  // //     val:string;
  // //     error: string;
  // //     isValid: () => boolean
      
  // //   },
  // //   password: {
  // //     val:string;
  // //     error: string;
  // //     isValid: () => boolean
      
  // //   }
  // // };
  // constructor() { 
  //   this.loginForm= this.data.FORM;

  // }

  //  get isValidForm(){
  //    return (this.loginForm.email.isValid() && this.loginForm.password.isValid());
  //  }

  ngOnInit(): void {
  }

}
