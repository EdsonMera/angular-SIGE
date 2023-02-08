import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { UsersComponent } from './users/users.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { UserRoutingModule } from './user-routing.module';
import { UpdateRegisterComponent } from './matricula/update-register/update-register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MatriculaComponent, UpdateRegisterComponent],
  imports: [
    SharedModule,
    UserRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class UserModule { }
