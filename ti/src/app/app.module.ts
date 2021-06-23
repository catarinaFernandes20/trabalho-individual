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

@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    LojaComponent,
    ErroComponent,
    TreinarComponent,
    LoginComponent,
    CidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
