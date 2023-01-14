import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: HomeComponent },  // Pag INICIO
  { path: 'agenda', component: UsersListComponent }, // Listar todos los Usuarios
  { path: 'nuevo-usuario', component: FormComponent }, // crear un nuevo Usuario
  { path: 'usuario/:userId', component: UserViewComponent}, // Vista individual del usuario
  { path: 'actualizar/:userId', component: FormComponent}, // Actualizar un usuario por Id
  { path: '**', redirectTo: 'inicio' }, // Ruta 404

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
