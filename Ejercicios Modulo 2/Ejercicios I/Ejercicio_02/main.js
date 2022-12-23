//Teniendo en cuenta el siguiente array de objetos
//
//const users = [
//  { name: 'María', isPremium: false },
//  { name: 'Lucía', isPremium: true },
//  { name: 'Susana', isPremium: true },
//  { name: 'Rocío', isPremium: false },
//  { name: 'Inmaculada', isPremium: false }
//];
//

const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];
// Crea una lista no ordenada con el nombre de cada usuario.

const lista = document.querySelector(".lista");
const ul = document.createElement("ul");

//console.log(usuario);
users.forEach((user) => {
  const li = document.createElement("li");
  li.textContent = user.name;
  li.dataset.premium = user.isPremium;

  ul.appendChild(li);
});
lista.appendChild(ul);

//Resalta con el background-color gold a los usuarios premium.
const listaPremium = document.querySelectorAll("li");
listaPremium.forEach((userGold) => {
  if (userGold.dataset.premium === "true") {
    userGold.style.cssText = "background-color: gold";
  }
});

// Añade también el atributo title con el valor Usuario premium a los usuarios premium.

listaPremium.forEach((atriUser) => {
  if (atriUser.dataset.premium === "true") {
    atriUser.setAttribute("title","Usuario");
  }
});
