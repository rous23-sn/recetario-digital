import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RecetasService, Receta } from '../services/recetas.service';
import { CommonModule, AsyncPipe } from '@angular/common';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-recetadetalle',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './recetadetalle.component.html',
  styleUrls: ['./recetadetalle.component.css']
  
})
export class RecetadetalleComponent implements OnInit {
  receta$!: Observable<Receta>;
  editForm!: FormGroup;
  isEditing = false;
  recetaId!: string;

  constructor(
    private route: ActivatedRoute,
    private recetasService: RecetasService,
    private router: Router,
    private fb: FormBuilder,
    private location: Location
  ) {}

  ngOnInit() {
    this.recetaId = this.route.snapshot.paramMap.get('id')!;
    this.receta$ = this.recetasService.getReceta(this.recetaId);

    this.editForm = this.fb.group({
      nombre: ['', Validators.required],
      ingredientes: ['', Validators.required],
      instrucciones: ['', Validators.required],
      tiempo: [0, Validators.required],
      categoria: ['', Validators.required]
    });
  }

  startEdit(receta: Receta) {
    this.isEditing = true;
    this.editForm.patchValue({
      nombre: receta.nombre,
      ingredientes: receta.ingredientes.join(', '),
      instrucciones: receta.instrucciones,
      tiempo: receta.tiempo,
      categoria: receta.categoria
    });
  }

  saveEdit() {
    if (this.editForm.valid) {
      const receta: Partial<Receta> = {
        nombre: this.editForm.value.nombre!,
        ingredientes: this.editForm.value.ingredientes!.split(',').map((i: string) => i.trim()),
        instrucciones: this.editForm.value.instrucciones!,
        tiempo: this.editForm.value.tiempo!,
        categoria: this.editForm.value.categoria!
      };
      this.recetasService.updateReceta(this.recetaId, receta).subscribe({
        next: () => {
          this.isEditing = false;
          this.receta$ = this.recetasService.getReceta(this.recetaId);
        },
        error: (err) => alert('Error: ' + err.message)
      });
    }
  }

  cancelEdit() {
    this.isEditing = false;
  }

  deleteReceta() {
    if (confirm('¿Estás seguro de eliminar esta receta?')) {
      this.recetasService.deleteReceta(this.recetaId).subscribe({
        next: () => this.router.navigate(['/recetas']),
        error: (err) => alert('Error: ' + err.message)
      });
    }
  }

  goBack() {
    this.location.back();
  }
}