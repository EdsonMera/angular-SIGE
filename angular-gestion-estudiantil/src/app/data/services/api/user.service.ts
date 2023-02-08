import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiClass } from '@data/schema/ApiClass..class';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private url= environment.uri;
  constructor(protected http: HttpClient) { }
  private title= 'Nuevo titulo';

  get getTitle(): string {
    return this.title;
  }

  setTitle(t: string){
    this.title= t;
  }

  clearTitle(){
    this.title= 'Nuevo titulo'
  }

  /** 
   * Get all user from api
   */

  getAllUsers(): Observable<{
    error: boolean,
    msg: string;
    data: ICardUser[]
  }> {
    const response = {error: false, msg: '', data:null};
    return this.http.get<ICardUser[]>(this.url + 'users')
    .pipe(
      map(r => {
        response.data= r;
      /**  r.map(i => {
          if(i.gender === '' || i.gender===null){
            i.gender= 'S/N';
          } 
        }); */
        return response;
      }),
    );
  }

  /**
   * get one user by id
   * @param id boolean
   * @returns 
   */

  getUserById(id: number): Observable<{
    error: boolean,
    msg: string;
    data: ICardUser

  }> {
    const response = {error: false, msg: '', data:null};
    return this.http.get<ICardUser>(this.url + 'users/' + id)
    .pipe(
      map( r => {
        response.data= r;
        return response;
        }),
      //catchError (this.error)
      );
      }
  }
  


