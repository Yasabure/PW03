import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = '';
  senha: string = '';

  mostrarRecuperacao = false;
  contatoRecuperacao = '';

  abrirRecuperacao(){
    this.mostrarRecuperacao = true;
  }

  fecharRecuperacao(){
    this.mostrarRecuperacao = false;
  }

  enviarRecuperacao(){
    const cliente = JSON.parse(localStorage.getItem('cliente') || '{}');

    if (cliente.email === this.contatoRecuperacao) {
      alert("Sua senha é: " + cliente.senha);
    } else {
      alert("Email não encontrado");
    }

    this.fecharRecuperacao();
  }

  logar(){
    const cliente = JSON.parse(localStorage.getItem('cliente') || '{}');

    if (
      cliente.email === this.email &&
      cliente.senha === this.senha
    ) {
      alert('Login realizado com sucesso!');
    } else {
      alert('Email ou senha inválidos');
    }
  }
}