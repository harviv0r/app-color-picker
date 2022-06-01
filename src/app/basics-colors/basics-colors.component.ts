import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-colors',
  templateUrl: './basics-colors.component.html',
  styleUrls: ['./basics-colors.component.css']
})
export class BasicsColorsComponent implements OnInit {
  colors = ["green", "red", "yellow", "blue"];
  containerBasicColorsClass:any;
  colorText:string='red';
  constructor() { }

  ngOnInit(): void {
    this.containerBasicColorsClass = document.querySelector(".container-basic-colors");
  }
  selectColor(){
    let randomNumber = Math.floor(Math.random() * this.colors.length);
    
    while(this.colors[randomNumber] == this.colorText){
      randomNumber = Math.floor(Math.random() * this.colors.length)
    }
    this.containerBasicColorsClass.style.backgroundColor = this.colors[randomNumber];
    this.colorText = this.colors[randomNumber];
    
  }

}
