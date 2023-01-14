import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PremioComponent } from './components/premio/premio.component';
import { LoginGuardGuard } from './guards/login-guard.guard';
import { PerfilComponent } from './components/perfil/perfil.component';





const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  //{ path: "premio/:token", component: PremioComponent },
  { path: "premio", component: PremioComponent, canActivate: [LoginGuardGuard] },
  { path: "perfil", component: PerfilComponent, canActivate: [LoginGuardGuard] },
   /* { path: "panel", component: PanelComponent, canActivate: [LoginGuardGuard], children: [
        { path: '"perfil", component: PerfilComponent },
        { path: '"new-product", component: FormProduct },
  ] },*/
  { path: "**", redirectTo: "home" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
