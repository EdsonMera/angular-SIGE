import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  irCrearNot(){
    console.log("nos vamos al apartado para crear notificaciones");
    this.router.navigate(['./panel/notificaciones/crear']);
  }
  
}
