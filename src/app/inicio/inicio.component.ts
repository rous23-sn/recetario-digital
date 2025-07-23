import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RecetasService } from '../services/recetas.service';
import { CommonModule, AsyncPipe } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Receta } from '../services/recetas.service';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, AsyncPipe],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class Inicio implements OnInit {
  recetas$!: Observable<Receta[]>;
  user$!: Observable<any>;

  constructor(
    private recetasService: RecetasService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.recetas$ = this.recetasService.getRecetas();
    this.user$ = this.authService.user$;
  }
}