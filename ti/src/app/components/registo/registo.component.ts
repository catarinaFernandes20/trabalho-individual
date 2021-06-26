import { Component, OnInit } from '@angular/core';
import { ligapi } from 'src/app/service/ligapi.service';


@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {


  ngOnInit(): void {
  }

  nome='';
  pass='';

  constructor(private ligapi : ligapi) {}
  registar()
  {
    console.log(this.nome, this.pass)
    this.ligapi.registar(this.nome, this.pass).subscribe(
      data=>console.log(data)
    );
  }

}
