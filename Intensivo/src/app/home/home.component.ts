import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "Home";

  vetor = [
    { nome :'Larissa', telefone: 2222 },
    { nome: 'Marcelo', telefone: "" },
    { nome: 'Jhemerson', telefone: "" },
    { nome: 'Jorge', telefone: "" },
    { nome: 'Isa', telefone: "" },
    { nome: 'Naty', telefone: "" },
    { nome: 'Patricia', telefone: "" },
    { nome: 'Rafael', telefone: "" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
