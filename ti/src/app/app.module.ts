import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArenaComponent } from './components/arena/arena.component';
import { LojaComponent } from './components/loja/loja.component';
import { ErroComponent } from './components/erro/erro.component';
import { TreinarComponent } from './components/treinar/treinar.component';
import { LoginComponent } from './components/login/login.component';
import { CidadeComponent } from './components/cidade/cidade.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CriarPersonagemComponent } from './components/criar-personagem/criar-personagem.component';
import { CriarArmaComponent } from './components/criar-arma/criar-arma.component';
import { RegistoComponent } from './components/registo/registo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    LojaComponent,
    ErroComponent,
    TreinarComponent,
    LoginComponent,
    CidadeComponent,
    CriarPersonagemComponent,
    CriarArmaComponent,
    RegistoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
