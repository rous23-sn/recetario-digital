import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta';
@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private recetas: Receta[] = [
    {
      id: 1, nombre: 'Arroz con huevo', dificultad: 'fácil', tiempo: 10,
      seleccionado: false
    },
    {
      id: 2, nombre: 'Tallarin rojo', dificultad: 'media', tiempo: 30,
      seleccionado: false
    },
    {
      id: 3, nombre: 'Ceviche', dificultad: 'difícil', tiempo: 25,
      seleccionado: false
    },
    {
      id: 4, nombre: 'Huevos revueltos', dificultad: 'fácil', tiempo: 5,
      seleccionado: false
    }
  ];
  setRecetaSeleccionada: any;

  getRecetas(): Receta[] {
    return this.recetas;
  }

  getRecetaPorId(id: number): Receta | undefined {
    return this.recetas.find(r => r.id === id);
  }

  getRecetasRapidas(): Receta[] {
    return this.recetas.filter(r => r.tiempo < 20);
  }

  getRecetaDetalle(id: number): Receta | undefined {
    return this.recetas.find(r => r.id === id);
  }
}
