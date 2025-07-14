import { Component,OnInit } from '@angular/core';
import { RecetasService } from '../services/recetas';
import { Receta } from '../interfaces/receta';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-recetas',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  recetas: Receta[] = [];

  constructor(private recetasService: RecetasService) {}

  ngOnInit(): void {
    this.recetas = this.recetasService.getRecetas();
  }

verDetalle(receta: Receta): void {
    this.recetasService.setRecetaSeleccionada(receta);
  }
}
