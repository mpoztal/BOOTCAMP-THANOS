import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterViewComponent } from './components/character-view/character-view.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard], children: [
      { path: '', pathMatch: 'full', redirectTo: 'characters' },
      { path: 'characters', component: CharactersListComponent },
      { path: 'character/:idcharacter', component: CharacterViewComponent } //characterView
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

