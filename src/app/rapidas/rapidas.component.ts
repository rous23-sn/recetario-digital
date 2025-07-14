import { Component,OnInit} from '@angular/core';
import { RecetasService } from '../services/recetas';
import { Receta } from '../interfaces/receta';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-rapidas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rapidas.component.html',
  styleUrls: ['./rapidas.component.css']
})
export class RapidasComponent implements OnInit {
  recetas: Receta[] = [];

  constructor(private recetasService: RecetasService) {}

  ngOnInit(): void {
    this.recetas = this.recetasService.getRecetasRapidas();
  }
}

