/*import { ligapi } from 'src/app/service/ligapi.service';*/
import { Component, OnInit } from '@angular/core';
import { ligapi } from 'src/app/service/ligapi.service';

@Component({
  selector: 'app-criar-arma',
  templateUrl: './criar-arma.component.html',
  styleUrls: ['./criar-arma.component.css']
})
export class CriarArmaComponent implements OnInit {

  constructor(private ligaapi:ligapi ) { }

  ngOnInit(): void {
  }

    /*-----coloquei totas as variaveis a string porque a number dava erro------*/
  nome: string = "";
  atk: string = "";
  durabilidade: string = "";
  tipoArma: string = "";
  vida: string="";

  resultado: any;

  criarArma()
  {
    console.log("criar");
    this.ligaapi.createArma(this.nome,this.atk,this.durabilidade,this.tipoArma,this.vida).subscribe(data => {this.resultado=data;console.log(this.resultado);});
  }


}
