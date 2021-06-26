export class Arma {
  nome: string;
  ataque: number;
  durabilidade: number;
  tipoArma: string;


  constructor(name:string, atk:number, durabilidade:number, TipoArma:string) {
    this.nome = name;
    this.ataque = atk;
    this.durabilidade = durabilidade;
    this.tipoArma = TipoArma;

  }
}
