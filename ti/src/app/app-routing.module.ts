import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArenaComponent } from './components/arena/arena.component';
import { CidadeComponent } from './components/cidade/cidade.component';
import { ErroComponent } from './components/erro/erro.component';
import { LoginComponent } from './components/login/login.component';
import { LojaComponent } from './components/loja/loja.component';
import { TreinarComponent } from './components/treinar/treinar.component';

const routes: Routes = [
   {
    path:"", component: CidadeComponent
  },
  {
    path:"Login", component: LoginComponent,
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

  {path:"notFound", component: ErroComponent},

  {path:"**", redirectTo:"notFound"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
