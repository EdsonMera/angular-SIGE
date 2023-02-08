import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irUsuario(){
    console.log("nos vamos a usuario");
    this.router.navigate(['./panel/user']);
  }

  irMatricula(){
    console.log("nos vamos a la matricula");
    this.router.navigate(['./panel/matricula']);
  }

  irAsistencia(){
    console.log("nos vamos a asistencia");
    this.router.navigate(['./panel/asistencia']);
  }

  irDudas(){
    console.log("nos vamos a atención a dudas");
    this.router.navigate(['./panel/dudas']);
  }

  irNotificaciones(){
    console.log("nos vamos a notificaciones");
    this.router.navigate(['./panel/notificaciones']);
  }
  
}
