import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaComponent } from './components/arena/arena.component';
import { CidadeComponent } from './components/cidade/cidade.component';
import { CriarArmaComponent } from './components/criar-arma/criar-arma.component';
import { CriarPersonagemComponent } from './components/criar-personagem/criar-personagem.component';
import { ErroComponent } from './components/erro/erro.component';
import { LoginComponent } from './components/login/login.component';
import { LojaComponent } from './components/loja/loja.component';
import { RegistoComponent } from './components/registo/registo.component';
import { TreinarComponent } from './components/treinar/treinar.component';


const routes: Routes = [
  {
    path:"", component: LoginComponent,
  },
  {
    path:"Login", component: LoginComponent,
  },
  {
    path:"Cidade", component: CidadeComponent
  },
  {
    path:"Arena", component: ArenaComponent,
  },
  {
     path:"Loja", component: LojaComponent,
  },
  {
    path:"Treinar", component: TreinarComponent,
  },
  {
    path:"Criar Arma", component: CriarArmaComponent,
  },
  {
    path:"Criar Personagem", component: CriarPersonagemComponent,
  },
  {
    path:"Registo", component: RegistoComponent,
  },

  {path:"notFound", component: ErroComponent},

  {path:"**", redirectTo:"notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
