//Crea una función que reciba un array de strings y devuelva un array con las strings ordenadas alfabéticamente de menor a mayor.

const odenAlfabetico = (objetos) => objetos.sort((a, b) => a.localeCompare(b));

const objetos = [
  "manzana",
  "árbol",
  "casa",
  "zapato",
  "sésamo",
  "carpa",
  "luna",
  "Carmen",
];
console.log(odenAlfabetico(objetos));
//Dado el siguiente array de numeros, crea una función que devuelva un array sin los números duplicados.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = numbers.filter((item, index) => {
  return numbers.indexOf(item) === index;
});
console.log(result);
//Dado el siguiente array de objetos, crea una función que devuelva un array sin los objetos duplicados.
const users = [
  {
    name: 'Juan',
    age: 25,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'María',
    age: 30,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pedro',
    age: 20,
    city: 'Madrid',
    hobbies: ['fútbol', 'programar'],
  },
  {
    name: 'Laura',
    age: 35,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pablo',
    age: 27,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'Juan',
    age: 25,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
  {
    name: 'María',
    age: 30,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pedro',
    age: 20,
    city: 'Madrid',
    hobbies: ['fútbol', 'programar'],
  },
  {
    name: 'Laura',
    age: 35,
    city: 'Barcelona',
    hobbies: ['pintar', 'leer', 'programar'],
  },
  {
    name: 'Pablo',
    age: 35,
    city: 'Madrid',
    hobbies: ['fútbol', 'poker', 'programar'],
  },
];

const sinDuplicados = (users) =>
  users.filter((user, index) => {
    const userString = JSON.stringify(user);
    return (
      users.findIndex((user) => JSON.stringify(user) === userString) === index
    );
  });

console.log(sinDuplicados(users));