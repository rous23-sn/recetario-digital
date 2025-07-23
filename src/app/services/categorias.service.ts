import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, doc, deleteDoc } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Categoria {
  id?: string;
  nombre: string;
}

@Injectable({ providedIn: 'root' })
export class CategoriasService {
  constructor(private firestore: Firestore) {}

  getCategorias(): Observable<Categoria[]> {
    const categoriasRef = collection(this.firestore, 'categorias');
    return from(getDocs(categoriasRef)).pipe(
      map(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Categoria)))
    );
  }

  addCategoria(categoria: Categoria): Observable<void> {
    const categoriasRef = collection(this.firestore, 'categorias');
    return from(addDoc(categoriasRef, categoria)).pipe(map(() => {}));
  }

  deleteCategoria(id: string): Observable<void> {
    const categoriaRef = doc(this.firestore, `categorias/${id}`);
    return from(deleteDoc(categoriaRef)).pipe(map(() => {}));
  }
}