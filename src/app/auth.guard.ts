import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    const authToken = sessionStorage.getItem('authToken'); // Recupera o token do sessionStorage
    if (authToken) {
      return true; // Permite acesso à rota se o token existir
    } else {
      this.router.navigate(['/login']); // Redireciona para a página de login se não estiver autenticado
      return false;
    }
  }
}
