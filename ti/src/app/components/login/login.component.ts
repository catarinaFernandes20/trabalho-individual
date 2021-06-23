import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JogadoresService } from 'src/app/service/jogadores.service';
import { ligapi } from 'src/app/service/ligapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private ligapi:ligapi, private jogadoresService:JogadoresService, private redirCidade:Router) { }

  ngOnInit(): void {
  }

  login(user: string, pass: string, inputUser: HTMLInputElement, inputPass: HTMLInputElement)
  {
    this.ligapi.login(user, pass).subscribe(data =>
      {
        this.jogadoresService.user = inputUser.value;
        this.jogadoresService.pass = inputPass.value;
        this.redirCidade.navigate(['/Cidade']);
      });
  }

}

