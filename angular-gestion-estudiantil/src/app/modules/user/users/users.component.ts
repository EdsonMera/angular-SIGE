import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigueService } from '../../../services/sigue.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [SigueService],
})
export class UsersComponent {

  users: any = [];

  constructor(private router: Router, private sigueService: SigueService) { }

  ngOnInit() {
    this.sigueService.getUsuarios().subscribe((res) => {
      this.users = res;
      console.log('Res ', res);
    },
    err => console.log(err));
  }

  irCrearUs(){
    console.log("nos vamos al apartado para crear usuario");
    this.router.navigate(['./panel/user/nuevo_usuario']);
  }

}
