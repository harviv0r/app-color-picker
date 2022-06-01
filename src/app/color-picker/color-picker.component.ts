import { Component, OnInit } from '@angular/core';
import iro from '@jaames/iro';


@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  main: any;
  colorText: any;
  
  constructor() { }

  ngOnInit(): void { 
    this.main = document.querySelector(".container-picker-colors");
    this.colorText = document.querySelector(".color");

    var colorPicker = iro.ColorPicker('#picker', {
      width: 320,
      color: "#f00",
    });
    colorPicker.on('color:change',  (color: any) => {
      this.main.style.backgroundColor = color.hexString;
      this.colorText.textContent = color.hexString;
    });
  }

}
