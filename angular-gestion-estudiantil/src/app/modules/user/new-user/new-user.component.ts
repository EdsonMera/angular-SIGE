import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {

  public userForm: FormGroup;
  public userSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      nombre_alumno: ['',
        [
          Validators.required
        ]
      ],
      a_p: ['', 
        [
          Validators.required
        ]
      ],
      a_m: ['', 
        [
          Validators.required
        ]
      ],
      correo: ['', 
      [
        Validators.required, 
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
      ]
    ],
      password: ['', 
      [
        Validators.required
      ]
    ],
      telefono: ['', 
      [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]
    ],
      id_cat_rol: ['',
        Validators.required
      ]
    });
  }

  get fm () {
    return this.userForm.controls;
  }


  authenticate(){
    this.userSubmitted = true;
    if (!this.userForm.valid) {
      return;
    }
    console.log('Verificado');
  }

}
