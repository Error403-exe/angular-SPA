import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  numeroProf: number = 3;

  remove(){
    this.numeroProf--;
  }

  add(){
    this.numeroProf++;
  }

}
