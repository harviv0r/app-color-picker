import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hex-colors',
  templateUrl: './hex-colors.component.html',
  styleUrls: ['./hex-colors.component.css']
})
export class HexColorsComponent implements OnInit {
  colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "f"];
  randomi = "#";
  colorText:string='#FF0000';
  containerHexColors:any;

  constructor() { }

  ngOnInit(): void {
    this.containerHexColors = document.querySelector(".container-hex-colors");

  }

  selectColor(){
    for (let i = 0; i < 6; i++) {
      this.randomi += (this.colors[(Math.floor(Math.random() * this.colors.length))]);
    }
    this.containerHexColors.style.backgroundColor=this.randomi;
    this.colorText=this.randomi;
    this.randomi='#';

  }

}
