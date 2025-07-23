import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from './services/recetas.service';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(recetas: Receta[] | null, term: string): Receta[] {
    if (!recetas) return [];
    if (!term) return recetas;

    term = term.toLowerCase();
    return recetas.filter(receta =>
      receta.nombre.toLowerCase().includes(term) ||
      receta.categoria.toLowerCase().includes(term)
    );
  }
}
