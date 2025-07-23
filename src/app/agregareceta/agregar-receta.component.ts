import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { RecetasService, Receta } from '../services/recetas.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-agregareceta',
  standalone: true,
  imports: [  CommonModule,ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './agregar-receta.component.html',
  styleUrls: ['./agregar-receta.component.css']
})
export class AgregarRecetaComponent {
  recetaForm;
  constructor(private fb: FormBuilder, private recetasService: RecetasService, private router: Router) {
    this.recetaForm = this.fb.group({
      nombre: ['', Validators.required],
      ingredientes: ['', Validators.required],
      instrucciones: ['', Validators.required],
      tiempo: [0, Validators.required],
      categoria: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.recetaForm.valid) {
      const receta: Receta = {
        id: 0, // Asignar un ID por defecto, Firestore lo generará
        nombre: this.recetaForm.value.nombre!,
        ingredientes: this.recetaForm.value.ingredientes!.split(',').map(i => i.trim()),
        instrucciones: this.recetaForm.value.instrucciones!.split('\n').map(i => i.trim()),
        tiempo: this.recetaForm.value.tiempo!,
        categoria: this.recetaForm.value.categoria!,
        dificultad: 'Fácil', // valor por defecto, ajusta según tu modelo
        seleccionado: false // valor por defecto
      };
      this.recetasService.addReceta(receta).subscribe({
        next: () => this.router.navigate(['/recetas']),
        error: (err) => alert('Error: ' + err.message)
      });
    }
  }
}
