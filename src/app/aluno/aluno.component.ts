import { Component, Input, OnInit, Output } from '@angular/core';
import { alunos } from '../model/alunos';

@Component({
  selector: 'spa-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.totalAlunos = this.listaAlunos.length;
  }

  exibeTabela:  boolean = false;

  totalAlunos: number = 0;

  listaAlunos: alunos[] = [
    { nome: 'Teste 0', idade: 27, email: 'Teste0@gmail.com', curso: 'Ciencia da Computacao' },
    { nome: 'Teste 1', idade: 25, email: 'Teste1@gmail.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Teste 2', idade: 31, email: 'Teste2@gmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Teste 3', idade: 45, email: 'Teste3@gmail.com', curso: 'Sistemas da informacao' }
  ];

  exibirTabela(){
    this.exibeTabela ? this.exibeTabela = false : this.exibeTabela = true;
  }
}
