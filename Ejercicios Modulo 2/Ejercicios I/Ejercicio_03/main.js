//Crea un cuadrado de 100x100px con el color de fondo red y el color de texto white con el texto Soy un cuadrado en el centro.
//Cada vez que se recargue la página el cuadrado debe tener un color de fondo aleatorio de entre los siguientes: red, green, blue, yellow, pink, purple, orange.

const colores = ["red", "green", "blue", "yellow", "pink", "purple", "orange"];

const square = document.querySelector(".cuadrado");
square.textContent = "Soy un cuadrado";
const color = colores[Math.floor(Math.random() * colores.length)];
square.style.backgroundColor = color;

//Si el color de fondo es red, green o blue el tamaño del cuadrado debe ser de 100x100px, si es yellow, pink o purple el tamaño del cuadrado debe ser de 200x200px y si es orange el tamaño del cuadrado debe ser de 300x300px.

if (color === "red" || color === "green" || color === "blue") {
  square.classList.toggle("size1");
} else if (color === "yellow" || color === "pink" || color === "purple") {
  square.classList.toggle("size2");
} else {
  square.classList.toggle("size3");
}
