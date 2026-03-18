import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reenvia-senha',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reenvia-senha.html',
  styleUrl: './reenvia-senha.css',
})
export class ReenviaSenha {

  email: string = '';

  recuperar() {
    const cliente = JSON.parse(localStorage.getItem('cliente') || '{}');

    if (cliente.email === this.email) {
      alert('Link de recuperação enviado! (simulação)\nSenha: ' + cliente.senha);
    } else {
      alert('Email não encontrado');
    }
  }
}