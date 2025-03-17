import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private validUser = { email: 'sneider@gmail.com', password: '123456' };

  login(email: string, password: string): Observable<boolean> {
    if (email === this.validUser.email && password === this.validUser.password) {
      localStorage.setItem('token', 'fake-jwt-token');
      return of(true).pipe(delay(1000)); // Simula una petición HTTP
    }
    return throwError(() => new Error('Credenciales incorrectas'));
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}