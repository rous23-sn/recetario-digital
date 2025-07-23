import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<any>;

  constructor(private auth: Auth) {
    this.user$ = new Observable(observer => this.auth.onAuthStateChanged(observer));
  }

  login(email: string, password: string): Observable<void> {
    return from(signInWithEmailAndPassword(this.auth, email, password).then(() => {}));
  }

  register(email: string, password: string): Observable<void> {
    return from(createUserWithEmailAndPassword(this.auth, email, password).then(() => {}));
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }
}