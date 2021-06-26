import { ligapi } from 'src/app/service/ligapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-personagem',
  templateUrl: './criar-personagem.component.html',
  styleUrls: ['./criar-personagem.component.css']
})
export class CriarPersonagemComponent implements OnInit {

  constructor(private ligapi : ligapi) { }

  ngOnInit(): void {
  }

  /*-----coloquei totas as variaveis a string porque a number dava erro------*/
  nome: string ="";
  atk : string ="";
  inteligencia: string ="";
  vida: string="";

  resultado : any;

  criarPersonagem()
  {
    console.log("criar");

    this.ligapi.createPersonagem(this.nome,this.atk,this.inteligencia,this.vida).subscribe(data => {this.resultado=data;console.log(this.resultado)});

  }
}


