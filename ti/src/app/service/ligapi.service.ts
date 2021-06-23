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
 linkDeleteChart = "http://moreiramoises.pt/server/apis/deleteChart.php"

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
}
