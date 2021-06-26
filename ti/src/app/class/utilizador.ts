export class Utilizador {
  nome : string;
  pass: string;
  id_user : number;

  constructor(nome:string, pass:string, id:number) {
    this.nome = nome;
    this.pass = pass;
    this.id_user = id;
  }
}
