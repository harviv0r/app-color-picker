# AppColorPickerPort

The next mini project is a color picker with 3 options:
1. Random basic colors without repeating when clicking. The colors are extracted from a **colors** array in the .ts


`colors = ["green", "red", "yellow", "blue"];`


![Captura desde 2022-05-31 21-06-00](https://user-images.githubusercontent.com/106542070/171318304-01b29a45-8765-4d52-844e-55f99b93bb84.png)




2. Random hex colors on click. The colors are extracted from an array **colors**
`colors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b ", "c", "d", "f"];` and a string `randomi = "#";`
Clicking calls


` for (let i = 0; i < 6; i++) {  
      this.randomi += (this.colors[(Math.floor(Math.random() * this.colors.length))]);
  }`
  
  
  
It is responsible for concatenating the `randomi` string with randomly selected elements of `colors`, generating a string `#4fd8aa` for example.
At the end, `this.randomi='#';` is cleared to start a new color
![Captura desde 2022-05-31 21-06-12](https://user-images.githubusercontent.com/106542070/171321116-b1ce0105-016e-476c-8e3b-adcea7d9df95.png)



3. Color palette. I used the Iro.js color palette, take a look at their website https://iro.js.org/
![Captura desde 2022-05-31 21-06-28](https://user-images.githubusercontent.com/106542070/171321443-505977bc-b8a7-4e5e-8e4d-5c866e6b1cb8.png)

