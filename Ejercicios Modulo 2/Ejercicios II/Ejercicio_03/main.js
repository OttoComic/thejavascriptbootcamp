//Teniendo en cuenta el siguiente template de una tarjeta de usuario y el siguiente array de objetos

const users = [
  {
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/men/38.jpg",
  },
  {
    name: "Jane Doe",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/women/74.jpg",
  },
  {
    name: "John Smith",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jane Smith",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    img: "https://randomuser.me/api/portraits/women/92.jpg",
  },
];

//Crea una card para cada usuario.

const card = document.querySelector("body");
const template = document.querySelector("template");


const nombre = template.content.querySelector("h2");
const description = template.content.querySelector("p");
const imagen = template.content.querySelector("img");

users.forEach((user) => {
  nombre.textContent = user.name;
  description.textContent = user.description;
  imagen.setAttribute("src", user.img);
  imagen.setAttribute("alt", user.name);
  const clone = template.content.cloneNode(true);
  card.append(clone);

})

//Como atributo alt de la imagen, quiero que se le añada el nombre del usuario.
//Puedes usar los estilos que están en el template o crear tus propios estilos. Además organiza el código CSS como creas conveniente.
