import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { ListaServiciosComponent } from './components/lista-servicios/lista-servicios.component';
import { VistaServicioComponent } from './components/vista-servicio/vista-servicio.component';
import { VistaProductoComponent } from './components/vista-producto/vista-producto.component';
import { NutricionalComponent } from './components/vista-producto/nutricional/nutricional.component';
import { OpinionesComponent } from './components/vista-producto/opiniones/opiniones.component';
// Todas las rutas se cargan en esta cons, dentro de este array[] 
const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: "/home" },  // Siempre debemos de ponerla pues determina q es mi ruta inicial.
  {path:'home', component: HomeComponent},
  {path:'contacto', component: ContactoComponent},
  {path: 'mis-servicios', component: ListaServiciosComponent},
  {path: 'servicios/:urlservicio', component: VistaServicioComponent},
  {path: 'productos', component: ProductosComponent},  //Creamos el sistema de rutas
  {path: 'producto/:idproducto', component: VistaProductoComponent, children: [
    { path: "", pathMatch: 'full', redirectTo: 'opiniones' }, //Carga por defecto a opiniones
    { path: 'opiniones', component: OpinionesComponent },
    { path: 'valores-nutricionales', component: NutricionalComponent }

    ]
  },

  //{ path: '**', component: C404Component },este lo dirige a C404Component q debe de estar previamen.creada.
  { path: '**', redirectTo: 'home' } // Esto te redirige a la ruta Home.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
