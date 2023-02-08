import { Component, OnInit } from '@angular/core';
import { Notificacion } from './create-notification.model';

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrls: ['./create-notification.component.css']
})
export class CreateNotificationComponent implements OnInit {

  notificaciones: Notificacion[] = [
    /*new Notificacion('Jorge Luis León Acevedo',
      'Todos',
      '28 mayo 2022',
      'Comisión de Situación Escolar',
      'Las fechas se publicarán en la página web de CET'),
    new Notificacion('Jorge Luis León Acevedo',
      'Primer Semestre Turno Matutino',
      '10 junio 2022',
      'Reinscripciones',
      '18 al 21 de julio de 2022'),
    new Notificacion('Jorge Luis León Acevedo',
      'Turno vespertino',
      '15 junio 2022',
      'Otras',
      'Acude con el representante de COSECOVI o consulta...'),
    new Notificacion('Jorge Luis León Acevedo',
      'Todos',
      '10 junio 2022',
      'Becas',
      ' ')*/
  ];

  fechahoy:Date = new Date();
  autorInput:string = '';
  enviadoInput:string = '';
  fechaInput:string = this.fechahoy.toDateString();
  categoriaInput:string = '';
  notificacionInput:string = '';

  constructor() { }

  ngOnInit(): void {
    
  }

}
