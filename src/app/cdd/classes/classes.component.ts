import { Generos } from './../modelos/generos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  livrosGeneros: Generos[] = [
    {_idGenero:"0", nomeGenero: "Generalidade", decimalGenero:"00", livrosGenero: 50},
    {_idGenero:"1", nomeGenero: "Filosofia e Psicologia", decimalGenero:"00", livrosGenero: 60},
    {_idGenero:"2", nomeGenero: "Religião", decimalGenero:"00", livrosGenero: 70},
    {_idGenero:"3", nomeGenero: "Ciências Socias", decimalGenero:"00", livrosGenero: 80},
    {_idGenero:"4", nomeGenero: "Linguas", decimalGenero:"00", livrosGenero: 90},
    {_idGenero:"5", nomeGenero: "Ciências Natuais e Matemática", decimalGenero:"00", livrosGenero: 100},
    {_idGenero:"6", nomeGenero: "Tecnologia e Ciências Aplicadas", decimalGenero:"00", livrosGenero: 110},
    {_idGenero:"7", nomeGenero: "Artes", decimalGenero:"00", livrosGenero: 120},
    {_idGenero:"8", nomeGenero: "Literatura e Retórica", decimalGenero:"00", livrosGenero: 130},
    {_idGenero:"9", nomeGenero: "Geografia História e Biografia", decimalGenero:"00", livrosGenero: 140},
  ];
  visaoColunas = ['_idGenero', 'nomeGenero', 'decimalGenero'];

  constructor() { }

  ngOnInit(): void {
  }

}
