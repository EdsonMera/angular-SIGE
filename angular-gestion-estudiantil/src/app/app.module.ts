import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { ErrorComponent } from './error/error.component';
import { AssistanceComponent } from './modules/assistance/assistance.component';
import { CreateReportComponent } from './modules/assistance/create-report/create-report.component';
import { DoubtsComponent } from './modules/doubts/doubts.component';
import { NotificationsComponent } from './modules/notifications/notifications.component';
import { CreateNotificationComponent } from './modules/notifications/create-notification/create-notification.component';
import { UsersComponent } from '@modules/user/users/users.component';
import { MatriculaComponent } from '@modules/user/matricula/matricula.component';
import { NewUserComponent } from '@modules/user/new-user/new-user.component';
import { UpdateRegisterComponent } from '@modules/user/matricula/update-register/update-register.component';
import { AddStudentComponent } from '@modules/user/matricula/add-student/add-student.component';
import { LoginComponent } from '@modules/auth/login/login.component';
import { LoginFormComponent } from '@modules/auth/login/login-form/login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SigueService } from './services/sigue.service';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterAssistanceComponent } from './modules/assistance/register-assistance/register-assistance.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    NavigationComponent,
    ErrorComponent,
    AssistanceComponent,
    CreateReportComponent,
    DoubtsComponent,
    NotificationsComponent,
    CreateNotificationComponent,
    LoginComponent,
    LoginFormComponent,
    AddStudentComponent,
    NewUserComponent,
    UsersComponent,
    RegisterAssistanceComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    DataTablesModule,
    //FormsModule,
    //HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    SigueService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
