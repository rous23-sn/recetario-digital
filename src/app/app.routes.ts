import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio.component';
import { RecetasComponent } from './recetas/recetas.component';
import { RapidasComponent } from './rapidas/rapidas.component';
import { RecetadetalleComponent } from './recetadetalle/recetadetalle.component';
import { AgregarRecetaComponent } from './agregareceta/agregar-receta.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { Error404Component } from './shared/error404/error404.component';
import { AuthGuard } from './guards/auth-guard';
export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'recetas', component: RecetasComponent },
  { path: 'rapidas', component: RapidasComponent },
  { path: 'detalle/:id', component: RecetadetalleComponent },
  { path: 'agregar', component: AgregarRecetaComponent, canActivate: [AuthGuard] },
  { path: 'categorias', loadComponent: () => import('./categorias/categorias.component').then(m => m.CategoriasComponent), canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', component: Error404Component }, // Página de error
];
