import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RecetasService, Receta } from '../services/recetas.service';
import { SearchPipe } from '../search.pipe';
import { CommonModule, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-recetas',
  standalone: true,
  imports:[CommonModule, RouterModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, SearchPipe, AsyncPipe, FormsModule],
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {
  recetas$!: ReturnType<RecetasService['getRecetas']>;
  searchTerm = '';

  constructor(private recetasService: RecetasService) {}

  ngOnInit() {
    this.recetas$ = this.recetasService.getRecetas();
  }
}
