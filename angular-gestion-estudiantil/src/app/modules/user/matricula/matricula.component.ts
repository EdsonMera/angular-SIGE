import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irNuevoEst(){
    console.log("nos vamos al apartado para agregar un nuevo estudiante");
    this.router.navigate(['./panel/matricula/nuevo_estudiante']);
  }

  irActualizarReg(){
    console.log("nos vamos al apartado para actualizar el registro");
    this.router.navigate(['./panel/matricula/actualizar_registro']);
  }
  
}
