import { UsuariosService } from './usuarios.service';
import { Component, Input, OnInit } from '@angular/core';
import { Usuarios } from '../usuarios';
import { UserRegister } from '../models/user.models';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  constructor(private _usuariosService: UsuariosService) { }
  public usuarios: UserRegister[]
  public correctLogin: boolean = false
 

  ngOnInit(): void {
    this.usuarios = []
    this._usuariosService.getUsuarios().subscribe((res:any)=>{
     
      console.log(res)
      this.usuarios = res
    })
    
    
  }
  receiveMessage($event:any){
    debugger

    const found =   this.usuarios.filter((item=> item.email == $event.email))
    const foundPass = this.usuarios.filter((item=> item.password == $event.password))
   
    if (found.length == 0){
      alert('Usuario no Registrado')
    }else if (found.length !== 0 && foundPass.length !== 0){
      alert('Bienvenido')
      this.correctLogin = true
    }else if (found.length !== 0 && foundPass.length == 0){
      alert('Contraseña Incorrecta')
    }
    
    
    
   
    
/*     console.log(this.usuarios) */
   
  }
}
