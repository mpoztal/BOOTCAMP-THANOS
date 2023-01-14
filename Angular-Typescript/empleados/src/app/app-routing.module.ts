import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "employees", component: EmployeesListComponent },
  { path: "new-employee", component: FormComponent },
  { path: "employee/:idemployee", component: EmployeeViewComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
