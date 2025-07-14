import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from '../services/recetas';
import { Receta } from '../interfaces/receta';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recetadetalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recetadetalle.component.html',
  styleUrls: ['./recetadetalle.component.css']
})
export class RecetadetalleComponent implements OnInit {
  receta: Receta | undefined;
  constructor(
    private route: ActivatedRoute,
    private recetasService: RecetasService
  ) {
    // Obtiene el ID de la receta desde la ruta
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Busca la receta por ID
    this.receta = this.recetasService.getRecetaPorId(id);
  }

ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.receta = this.recetasService.getRecetaPorId(id);
    // Aquí puedes realizar alguna acción al inicializar el componente
  }
}

