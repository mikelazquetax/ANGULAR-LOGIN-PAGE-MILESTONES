import { UserRegister } from './../models/user.models';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { milestoneDomain } from '../utils/customValidators';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent implements OnInit {
  public userRegisterForm: FormGroup; //para que no de por **** ponemos el initialization en false en el ts.config
  public submitted: boolean;
 
  public correctLogin: boolean = true
  public usuarioLogin: UserRegister[]
  public user: {
    email: string,
    password: string,
  }
  public email: string 
  public password: string 

  @Output() messageEvent = new EventEmitter<any>();
  
  constructor(private formBuilder: FormBuilder, private _usuariosService: UsuariosService, private router: Router) { 
   
  }

  ngOnInit(): void {
    
    this.correctLogin = false
    this.usuarioLogin = []
    this.userRegisterForm = this.formBuilder.group({ //con esto le decimos que queremos crear un grupo formulario para validar conjuntamente email y contraseña
      email: ['',[Validators.required, Validators.maxLength(75), Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$/)]], 
      password: ['',[Validators.required]] //Minimum eight characters, at least one letter and one number:

    },
      {
      validator: milestoneDomain('email', 'password', 'password'),
     
    }  );

    this.submitted = false
    this._usuariosService.getUsuarios().subscribe((res:any)=>{
     
      console.log(res)
      this.usuarioLogin = res
    })
  

  }

  onSubmit(e:any){
  
    this.submitted = true 
    console.log(this.userRegisterForm)
    if(this.userRegisterForm.valid){
      
      const user: UserRegister = {
        email: this.userRegisterForm.get('email')?.value,
        password: this.userRegisterForm.get('password')?.value,
      }
     
/*       const found =   this.usuarioLogin.filter((item=> item.email == user.email))
      const foundPass = this.usuarioLogin.filter((item=> item.password == user.password)) */
let found: string = ''


      this.usuarioLogin.forEach((usuario) =>{
        if(usuario.email == user.email && usuario.password == user.password){
         found = 'x'
         
        }
      })
     debugger
      if( found == 'x'){
        this.user = user
        this.email = user.email
        this.password = user.password
        this.correctLogin = true
        
        this.router.navigate(['/timeline/'], {queryParams:{data:this.email}});
      } else {
        alert('Contraseña Incorrecta o Usuario Inexistente')
      }
      

        /* this.messageEvent.emit(user)   */ 
       /* He decidido no utilizar el componente usuarios y utilizar este mismo componente para
       las querys y consumo de datos y sus posibles validaciones */
     
       console.log(user);
     
    }
  }
}
function e(e: any, any: any) {
  throw new Error('Function not implemented.');
}

