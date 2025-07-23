import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CategoriasService, Categoria } from '../services/categorias.service';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, AsyncPipe],
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  categorias$!: Observable<Categoria[]>;
  categoriaForm!: FormGroup;

  constructor(
    private categoriasService: CategoriasService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.categorias$ = this.categoriasService.getCategorias();
    this.categoriaForm = this.fb.group({
      nombre: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.categoriaForm.valid) {
      const categoria: Categoria = { nombre: this.categoriaForm.value.nombre! };
      this.categoriasService.addCategoria(categoria).subscribe({
        next: () => {
          this.categoriaForm.reset();
          this.categorias$ = this.categoriasService.getCategorias();
        },
        error: (err) => alert('Error: ' + err.message)
      });
    }
  }

  deleteCategoria(id: string) {
    if (confirm('¿Estás seguro de eliminar esta categoría?')) {
      this.categoriasService.deleteCategoria(id).subscribe({
        next: () => this.categorias$ = this.categoriasService.getCategorias(),
        error: (err) => alert('Error: ' + err.message)
      });
    }
  }
}