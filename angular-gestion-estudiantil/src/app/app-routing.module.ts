import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';
import { AssistanceComponent } from '@modules/assistance/assistance.component';
import { CreateReportComponent } from '@modules/assistance/create-report/create-report.component';
import { RegisterAssistanceComponent } from '@modules/assistance/register-assistance/register-assistance.component';
import { LoginComponent } from '@modules/auth/login/login.component';
import { DoubtsComponent } from '@modules/doubts/doubts.component';
import { CreateNotificationComponent } from '@modules/notifications/create-notification/create-notification.component';
import { NotificationsComponent } from '@modules/notifications/notifications.component';
import { AddStudentComponent } from '@modules/user/matricula/add-student/add-student.component';
import { MatriculaComponent } from '@modules/user/matricula/matricula.component';
import { UpdateRegisterComponent } from '@modules/user/matricula/update-register/update-register.component';
import { NewUserComponent } from '@modules/user/new-user/new-user.component';
import { UsersComponent } from '@modules/user/users/users.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '', //si la ruta viee en blanco pasa a la siguiente
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@modules/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'panel', //si encuentra cuaalquiera de estas rutas hijas nos va a redireccionar a la misma
    component: SkeletonComponent,
    children: [
      /*
      {
        path: 'user',
        loadChildren: () =>
        import('@modules/user/user.module').then( (m) => m.UserModule)
      },
      */
      { path: 'user', component: UsersComponent },
      { path: 'user/nuevo_usuario', component: NewUserComponent },
      { path: 'matricula', component: MatriculaComponent },
      {
        path: 'matricula/actualizar_registro',
        component: UpdateRegisterComponent,
      },
      {
        path: 'matricula/nuevo_estudiante',
        component: AddStudentComponent,
      },
      { path: 'asistencia', component: AssistanceComponent },
      { path: 'asistencia/informe', component: CreateReportComponent },
      { path: 'asistencia/registro', component: RegisterAssistanceComponent},
      { path: 'dudas', component: DoubtsComponent },
      { path: 'notificaciones', component: NotificationsComponent },
      { path: 'notificaciones/crear', component: CreateNotificationComponent },
    ],
  },

  /*
   {
    path: 'login',
    component: LoginComponent
  },
  */
  {
    path: '**',
    redirectTo: '/auth/login', //sirve por si modifican el url te redirecciona automaticamente a la misma ruta
    pathMatch: 'full',
  },

  /*
  {path: '', component: SkeletonComponent, children: [
    {path: 'user', component: UsersComponent},
    {path: 'user/nuevo_usuario', component: NewUserComponent},
    {path: 'matricula', component: MatriculaComponent},
    {  
      path: 'matricula/actualizar_registro',
      component: UpdateRegisterComponent
    },
    {
      path: 'matricula/nuevo_estudiante',
      component: AddStudentComponent
    },
  ]},
  */
  /*
  {path: 'panel/asistencia', component: AssistanceComponent},
  {path: 'panel/informe', component: CreateReportComponent},
  {path: 'panel/dudas', component: DoubtsComponent},
  {path: 'panel/notificaciones', component: NotificationsComponent},
  {path: 'panel/notificaciones/crear', component: CreateNotificationComponent},
*/
  //{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
