
export interface Receta {
  id: number;
  nombre: string;
  dificultad: 'fácil' | 'media' | 'difícil';
  tiempo: number;
  seleccionado:boolean;
}