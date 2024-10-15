import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
        next: (response) => {
            // Salvar token recebido da resposta da API
            sessionStorage.setItem('authToken', response.token); // Armazena o token recebido
            alert('Login bem-sucedido!'); // Mensagem de sucesso
            this.router.navigate(['/importar']); // Redireciona para a página principal
        },
        error: (err) => {
            console.error('Erro ao fazer login:', err);
            alert('Login falhou! Verifique suas credenciais.');
        }
    });
}
}
