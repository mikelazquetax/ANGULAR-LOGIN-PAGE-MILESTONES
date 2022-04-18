import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormComponent } from './form/form.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [
  {path: '', redirectTo: 'form', pathMatch: 'full'},
  {path: 'form', component: UsuariosComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'timeline', component: TimelineComponent},
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)],
 
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
