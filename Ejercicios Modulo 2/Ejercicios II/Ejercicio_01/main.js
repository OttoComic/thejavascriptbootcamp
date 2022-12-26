//Teniendo en cuenta el siguiente HTML

//<div class="app">
//<p>Soy un párrafo</p>
//<p>Soy otro párrafo</p>
//</div>

//Crea una imagen con el atributo src con el valor https://via.placeholder.com/150 y el atributo alt con el valor Imagen de ejemplo.
const app = document.querySelector(".app");
const imagen = document.createElement("img");
imagen.setAttribute("src", "https://via.placeholder.com/150");

//Inserta la imagen dentro del div con la clase app.
app.append(imagen);

//¿Podrías insertar la imagen antes del primer párrafo? Toca investigar
const imagen2 = document.createElement("img");
imagen2.setAttribute("src", "https://via.placeholder.com/150");
app.insertAdjacentElement("afterbegin", imagen2)

//¿Podrías insertar la imagen entre los dos párrafos?
const imagen3 = document.createElement("img");
imagen3.setAttribute("src", "https://via.placeholder.com/150");
let segundoParrafo = document.querySelector('.app').getElementsByTagName('p')[1];
app.insertBefore(imagen3,segundoParrafo);



