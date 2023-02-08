import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Alumno } from 'app/models/Alumnos';
import { Usuario } from 'app/models/Usuarios';
import { Observable } from 'rxjs';

@Injectable()
export class SigueService {

  API_URL = 'http://localhost/3000';

  constructor(private http: HttpClient) { }

  //ALUMNOS
  getAlumnos() {
    //return this.http.get(`${this.API_URL}/alumnos`);
    return this.http.get(`/api/alumnos`);
  }

  getAlumno(id: string) {
    return this.http.get(`${this.API_URL}/alumnos/${id}`);
  }

  saveAlumno(alumno: Alumno) {
    return this.http.post(`${this.API_URL}/alumnos`, alumno);
  }

  //USUARIOS
  getUsuarios(): Observable<any> {
    return this.http.get<any>('/api/usuarios');
  }

  getUsuario(id: string) {
    return this.http.get(`/api/users/${id}`);
  }

  deleteUsuario(id: string) {
    return this.http.delete(`${this.API_URL}/users/${id}`);
  }

  saveUsuario(usuario: Usuario) {
    return this.http.post(`${this.API_URL}/users`, usuario);
  }

  updateUsuario(id: string|number, updatedUser: Usuario): Observable<Usuario> {
    return this.http.put(`${this.API_URL}/users/${id}`, updatedUser);
  }

}
