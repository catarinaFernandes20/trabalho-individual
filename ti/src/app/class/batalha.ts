import { Arma } from './arma';
import { Personagem } from './personagem';
export class Batalha {

  meuJogador :Personagem;
  meuInimigo : Personagem;

  meuJogadorWeapon : Arma;
  meuInimigoWeapon : Arma;


  messages: Array<string> = [];

  constructor(meuJogador: Personagem, meuInimigo: Personagem, minhaArma: Arma, inimigoArma : Arma)
  {
    this.meuJogador = meuJogador;
    this.meuInimigo = meuInimigo;
        this.meuJogadorWeapon = minhaArma;
        this.meuInimigoWeapon = inimigoArma;
  }

  atacar(outraVez:string)
  {

    if(outraVez)
    {
      this.messages.push(`A batalha continua`);

      let whoAttacksFirst = Math.floor(Math.random() * 11);
      if(whoAttacksFirst<=10)
      {
        let meuAtaque = Math.round(this.meuJogador.ataque*100+this.meuJogador.inteligencia*100+this.meuJogadorWeapon.ataque*100);
          this.meuInimigo.vida -= meuAtaque;
          this.messages.push(`Ataque especial de ${this.meuJogador.nome} tira  ${meuAtaque} de vida`);

          if(this.meuInimigo.vida<=0)
          {
            //return this.Morreu("ele");
          }else {
            let meuAtaque = Math.round(this.meuInimigo.ataque*0.4+this.meuInimigo.inteligencia*0.2+this.meuInimigoWeapon.ataque*0.4);
        this.meuJogador.vida -= meuAtaque;
        this.messages.push(`Ataque com hacks de ${this.meuInimigo.nome} tira  ${meuAtaque} de vida`);
        if(this.meuJogador.vida<=0)
        {
          //return this.Morreu("eu");
        }

          }
      }

      else {




        let meuAtaque = Math.round(this.meuInimigo.ataque*0.4+this.meuInimigo.inteligencia*0.2+this.meuInimigoWeapon.ataque*0.4);
        this.meuJogador.vida -= meuAtaque;
        this.messages.push(`Ataque com hacks de ${this.meuInimigo.nome} tira  ${meuAtaque} de vida`);

        if(this.meuJogador.vida<=0)
        {
          //return this.Morreu("eu");
        } else {
          let meuAtaque = Math.round(this.meuJogador.ataque*100+this.meuJogador.inteligencia*100+this.meuJogadorWeapon.ataque*100);
          this.meuInimigo.vida -= meuAtaque;
          this.messages.push(`Ataque especial de ${this.meuJogador.nome} tira  ${meuAtaque} de vida`);

          if(this.meuInimigo.vida<=0)
          {
            //return this.Morreu("ele");
          }
        }

      }
    }
    else
    {
      this.messages.push(`Uma batalha intensa entre ${this.meuJogador.nome} e o noob do ${this.meuInimigo.nome}`);

      let whoAttacksFirst = Math.floor(Math.random() * 11);
      if(whoAttacksFirst<=6)
      {
        let meuAtaque = Math.round(this.meuJogador.ataque*0.3+this.meuJogador.inteligencia*0.6+this.meuJogadorWeapon.ataque*0.1);
          this.meuInimigo.vida -= meuAtaque;
          this.messages.push(`Incrivel ataque de ${this.meuJogador.nome} tira  ${meuAtaque} de vida`);

          if(this.meuInimigo.vida<=0)
          {
            //return this.Morreu("ele");
          } else {
            let meuAtaque = Math.round(this.meuInimigo.ataque*0.1+this.meuInimigo.inteligencia*0.2+this.meuInimigoWeapon.ataque*0.7);
        this.meuJogador.vida -= meuAtaque;
        this.messages.push(`Ataque com hacks de ${this.meuInimigo.nome} tira  ${meuAtaque} de vida`);

        if(this.meuJogador.vida<=0)
        {
          //return this.Morreu("eu");
        }
          }
      }

      else {

        let meuAtaque = Math.round(this.meuInimigo.ataque*0.1+this.meuInimigo.inteligencia*0.2+this.meuInimigoWeapon.ataque*0.7);
        this.meuJogador.vida -= meuAtaque;
        this.messages.push(`Ataque com hacks de ${this.meuInimigo.nome} tira  ${meuAtaque} de vida`);

        if(this.meuJogador.vida<=0)
        {
          //return this.Morreu("eu");
        }
        else
        {
          let meuAtaque = Math.round(this.meuJogador.ataque*0.3+this.meuJogador.inteligencia*0.6+this.meuJogadorWeapon.ataque*0.1);
          this.meuInimigo.vida -= meuAtaque;
          this.messages.push(`Incrivel ataque de ${this.meuJogador.nome} tira  ${meuAtaque} de vida`);
          if(this.meuInimigo.vida<=0)
          {
            //return this.Morreu("ele");
          }
        }

      }

    }
      return "continua";
  }

  /*Morreu(who:string)
  {
      if(who=="eu")
      {
        this.messages.push(`Morreu ${this.meuJogador.nome}`);
          return "p-lose";
      }
      else if(who=="ele") {
        this.messages.push(`Morreu ${this.meuInimigo.nome}`);
        return "p-win";
      }

  }*/
}





