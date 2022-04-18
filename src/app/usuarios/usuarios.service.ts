import { popupModel } from './../models/popup.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../usuarios';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
 
  constructor(private _httpClient: HttpClient) { }
  private url = "http://localhost:3000/usuarios"

  getUsuarios(): Observable<Usuarios[]>{
    return this._httpClient.get<Usuarios[]>(this.url);
  }
  postUsuario(id:string, email:string, password:string, milestones:popupModel[]){
    this._httpClient.post(this.url,{
      id: id,
      email: email,
      password : password,
      milestones: milestones
    }).toPromise().then((data:any)=>{
      console.log(data)
    })
  }

  putUsuario(id:string, email:string, password:string, milestones:popupModel[]){
    this._httpClient.put(`http://localhost:3000/usuarios/${id}`,{
      id: id,
      email: email,
      password : password,
      milestones: milestones
    }).toPromise().then((data:any)=>{
      console.log(data)
    })
  }

  


}
