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

  mostrarRecuperacao = false;

  contatoRecuperacao = '';

  abrirRecuperacao(){
    this.mostrarRecuperacao = true;
  }

  fecharRecuperacao(){
    this.mostrarRecuperacao = false;
  }

  enviarRecuperacao(){
    alert("Link enviado para: " + this.contatoRecuperacao);
    this.fecharRecuperacao();
  }

}