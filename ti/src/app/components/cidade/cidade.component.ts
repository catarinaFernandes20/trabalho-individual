import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  constructor(private redirecionar:Router) { }

  ngOnInit(): void {
  }

  entrarArena()
  {
    this.redirecionar.navigate(['/Arena']);
  }
  entrarLoja()
  {
    this.redirecionar.navigate(['/Loja']);
  }
  entrarTreino()
  {
    this.redirecionar.navigate(['/Treinar']);
  }
}
