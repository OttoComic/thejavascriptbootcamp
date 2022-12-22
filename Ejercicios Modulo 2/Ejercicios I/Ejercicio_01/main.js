//<p>Este es el primer párrafo</p>
//<p class="parrafo">Este es el segundo párrafo</p>
//<p>Este es el tercer párrafo</p>
//Muestra en la consola el texto de cada uno de los párrafos.
const parrafos = document.querySelectorAll("p");

parrafos.forEach((texto) => {
  console.log(texto.textContent);
});
//Muestra en la consola el texto de cada uno de los párrafos que tengan la clase parrafo.
const textoParrafo = document.querySelectorAll(".parrafo");
textoParrafo.forEach((textoP) => {
  console.log(textoP.textContent);
});

//Modifica el texto de cada uno de los párrafos que tengan la clase parrafo por "Hola Mundo".
const modificaParrafo = document.querySelectorAll(".parrafo");
modificaParrafo.forEach((textoMod) => {
  textoMod.textContent = "Hola Mundo";
});
//Cambia el color de fondo de cada uno de los párrafos que tengan la clase parrafo por red.
const nuevoFondoParrafo = document.querySelectorAll(".parrafo");
nuevoFondoParrafo.forEach((fondoMod) => {
  fondoMod.style.cssText = "background-color: red";
});
//Añade un span con el texto "Infiltrado" al final de cada uno de los párrafos que tengan la clase parrafo.
const addSpan = document.querySelectorAll(".parrafo");
addSpan.forEach((nuevoSpan) => {
  const span = document.createElement("span");
  span.textContent = " Infiltrado";
  nuevoSpan.appendChild(span);
});
