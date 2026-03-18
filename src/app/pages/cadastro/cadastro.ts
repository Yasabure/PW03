import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../Model/cliente'

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  cliente: Cliente = new Cliente();
  confirmarSenha: string = '';

  salvar() {

    // validação simples
    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    // salvar no localStorage
    localStorage.setItem('cliente', JSON.stringify(this.cliente));

    alert('Cadastro realizado com sucesso!');

    // limpa o form
    this.cliente = new Cliente();
    this.confirmarSenha = '';
  }
}