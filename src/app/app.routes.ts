import { Routes } from '@angular/router';

import { Vitrine } from './pages/vitrine/vitrine';
import { Contato } from './pages/contato/contato';
import { Cadastro } from './pages/cadastro/cadastro';
import { Login } from './pages/login/login';
import { Cesta } from './pages/cesta/cesta';
//import { Pesquisa } from './pages/pesquisa/pesquisa';
import { ReenviaSenha } from './pages/reenvia-senha/reenvia-senha';

export const routes: Routes = [

  { path: '', component: Vitrine },

  { path: 'vitrine', component: Vitrine },

  { path: 'contato', component: Contato },

  { path: 'cadastro', component: Cadastro },

  { path: 'login', component: Login },

  { path: 'cesta', component: Cesta },

  //{ path: 'pesquisa', component: Pesquisa },

  { path: 'reenviaSenha', component: ReenviaSenha },

];