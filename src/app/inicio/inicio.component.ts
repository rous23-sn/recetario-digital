import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class Inicio {
  mensaje: string= 'Bienvenido a la aplicación de recetas de cocina'.toUpperCase();

}
