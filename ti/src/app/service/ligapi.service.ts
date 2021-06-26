import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ligapi {

 constructor(private http: HttpClient) { }

 linkRegistar = "http://moreiramoises.pt/server/apis/signup.php";
 linkLogin = "http://moreiramoises.pt/server/apis/login.php";
 linkCriarChart = "http://moreiramoises.pt/server/apis/createChart.php";
 linkUpdateChart = "http://moreiramoises.pt/server/apis/updateChart.php";
 linkDeleteChart = "http://moreiramoises.pt/server/apis/deleteChart.php";
 linkRandomChar: string = 'http://moreiramoises.pt/server/apis/get/getRandomChar.php?';
 linkCreateArma = 'http://moreiramoises.pt/server/apis/createArma.php';
 linkGetChar = 'http://moreiramoises.pt/server/apis/get/getChar.php';
 linkGetArma = 'http://moreiramoises.pt/server/apis/get/getArma.php';
 linkRandomArma = 'http://moreiramoises.pt/server/apis/get/getRandomArma.php';


  /*------------------criar conta---------------------*/
  registar(nome:string, pass:string)
  {
    let dataToSend : FormData = new FormData();
    dataToSend.append("username", nome);
    dataToSend.append("password", pass);

    return this.http.post(this.linkRegistar, dataToSend);
  }
  /*----------------------fazer login-----------------------*/
  login(nome:string, pass:string)
  {
    let dataToSend : FormData = new FormData();
    dataToSend.append("username", nome);
    dataToSend.append("password", pass);

    return this.http.post(this.linkLogin, dataToSend);
  }

  /*------------------------create chart -----------------------*/
  createChart(nome: string, atk: string, isMonster: boolean, int: string, vida: string, user: string, pass: string)
  {
    let dataToSend : FormData = new FormData();
    dataToSend.append("nome", nome);
    dataToSend.append("atk", atk);
    dataToSend.append("isMonster", 'false');
    dataToSend.append("int", int);
    dataToSend.append("vida", vida);
    dataToSend.append("username", user);
    dataToSend.append("password", pass);

    return this.http.post(this.linkCriarChart, dataToSend);
  }

  /*------------------update chart---------------------*/
  updateChart(nome: string, atk: string, isMonster: boolean, int: string, vida: string, user: string, pass: string)
  {
    let dataToSend : FormData = new FormData();
    dataToSend.append("nome", nome);
    dataToSend.append("atk", atk);
    dataToSend.append("isMonster", 'false');
    dataToSend.append("int", int);
    dataToSend.append("vida", vida);
    dataToSend.append("username", user);
    dataToSend.append("password", pass);

    return this.http.post(this.linkUpdateChart, dataToSend);
  }
  /*-------------------------delete char----------------------*/
  deleteChart(username: string, password: string, idpersonagem: string)
  {
    let dataToSend : FormData = new FormData();
    dataToSend.append("username", username);
    dataToSend.append("password", password);
    dataToSend.append("idpersonagem", idpersonagem);

    return this.http.post(this.linkDeleteChart, dataToSend);
  }
  /*---------------------random char-------------------------*/
  randomChar()
  {
    return this.http.get(this.linkRandomChar);
  }


  /*------------------criar arma-----------------------*/
  /*-----coloquei totas as variaveis a string porque a number dava erro------*/
  createArma(name: string, atk:string, durabilidade: string, tipoDeArma:string, vida: string)
  {
    let dataToSend: FormData = new FormData();

    dataToSend.append('name', name);
    dataToSend.append('atk', atk);
    dataToSend.append('durabilidade', durabilidade);
    dataToSend.append('tipoDeArma', tipoDeArma);
    dataToSend.append('vida', vida);
    /*dataToSend.append('username', username);
    dataToSend.append('password', password);
    dataToSend.append('idPersonagem', idPersonagem);*/

    return this.http.post(this.linkGetArma, dataToSend);
  }

  /*-------------------criar personagem-------------------*/
    /*-----coloquei totas as variaveis a string porque a number dava erro------*/
    createPersonagem(name: string, atk: string, int: string, vida: string) {
      let dataToSend: FormData = new FormData();

      dataToSend.append('name', name);
      dataToSend.append('atk', atk);
      dataToSend.append('isMonster', 'false');
      dataToSend.append('int', int);
      dataToSend.append('vida', vida);
      /*dataToSend.append('username', user);
      dataToSend.append('password', pass);*/

      return this.http.post(this.linkGetChar, dataToSend);
    }

  /*------------getInimigo-----------------*/
  getInimigo() {
    return this.http.get(this.linkRandomChar);
  }
  /*-----------getPersonagem------------*/
  getPersonagem(id:number) {
    return this.http.get(this.linkGetChar + id);
  }
  /*-----------getArma----------------*/
  getArma()
  {
    return this.http.get(this.linkRandomArma);
  }
}
