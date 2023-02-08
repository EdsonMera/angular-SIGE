import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assistance',
  templateUrl: './assistance.component.html',
  styleUrls: ['./assistance.component.css']
})
export class AssistanceComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irVerInf(){
    console.log("nos vamos al apartado para ver informe de asistencia");
    this.router.navigate(['./panel/asistencia/informe']);
  }

}
