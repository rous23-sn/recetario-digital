import { Component,OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RecetasService,Receta } from '../services/recetas.service';
import { CommonModule, AsyncPipe } from '@angular/common';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-rapidas',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, AsyncPipe],

  templateUrl: './rapidas.component.html',
  styleUrls: ['./rapidas.component.css']
})
export class RapidasComponent implements OnInit {
  recetasRapidas$!: any;

  constructor(private recetasService: RecetasService) {}

  ngOnInit() {
    this.recetasRapidas$ = this.recetasService.getRecetas().pipe(
      map(recetas => recetas.filter(receta => receta.tiempo <= 10))
    );
  }
}

