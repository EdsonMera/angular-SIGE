import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './matricula/add-student/add-student.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { UpdateRegisterComponent } from './matricula/update-register/update-register.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [

 {
  path: '',
  component: UsersComponent
 },
 {
    path: 'detail',
    component: MatriculaComponent
 },
 {
  path: 'new-user',
  component: NewUserComponent
 },
 {
  path: 'update-register',
  component: UpdateRegisterComponent
 },
 {
  path: 'add-student',
  component: AddStudentComponent
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
