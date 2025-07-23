import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Receta {
  id: number;
  nombre: string;
  ingredientes: string[];
  instrucciones: string[];
  dificultad: string;
  tiempo: number; // Tiempo en minutos
  categoria: string;
  seleccionado: boolean;
}

@Injectable({ providedIn: 'root' })
export class RecetasService {
  constructor(private firestore: Firestore) {}

  getRecetas(): Observable<Receta[]> {
    const recetasRef = collection(this.firestore, 'recetas');
    return from(getDocs(recetasRef)).pipe(
      map(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as unknown as Receta)))
    );
  }

  getReceta(id: string): Observable<Receta> {
    const recetaRef = doc(this.firestore, `recetas/${id}`);
    return from(getDoc(recetaRef)).pipe(
      map(doc => ({ id: doc.id, ...(doc.data() as unknown as Omit<Receta, 'id'>) } as unknown as Receta))
    );
  }

  addReceta(receta: Receta): Observable<void> {
    const recetasRef = collection(this.firestore, 'recetas');
    return from(addDoc(recetasRef, receta)).pipe(map(() => {}));
  }

  updateReceta(id: string, receta: Partial<Receta>): Observable<void> {
    const recetaRef = doc(this.firestore, `recetas/${id}`);
    return from(updateDoc(recetaRef, receta)).pipe(map(() => {}));
  }

  deleteReceta(id: string): Observable<void> {
    const recetaRef = doc(this.firestore, `recetas/${id}`);
    return from(deleteDoc(recetaRef)).pipe(map(() => {}));
  }
}