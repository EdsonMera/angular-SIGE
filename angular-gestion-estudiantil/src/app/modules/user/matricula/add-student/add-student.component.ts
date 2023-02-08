import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  public studentForm: FormGroup;
  public studentSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      boleta: ['', 
        [
          Validators.required, 
          Validators.maxLength(10), 
          Validators.minLength(10)
        ]
      ],
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
      id_cat_grupos: ['',
        Validators.required
      ],
      id_prog_acad: ['', 
        Validators.required
      ],
      curp: ['', 
        [
          Validators.required, 
          Validators.maxLength(18), 
          Validators.minLength(18), 
        ]
      ],
      correo: ['', 
        [
          Validators.required, 
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]
      ],
      telefono_tutor: ['', 
        [
          Validators.required, 
          Validators.maxLength(10), 
          Validators.minLength(7)
        ]
      ]
    });
  }

  get fm () {
    return this.studentForm.controls;
  }


  authenticate(){
    this.studentSubmitted = true;
    if (!this.studentForm.valid) {
      return;
    }
    console.log('Verificado');
  }
  
}
