//Dado el siguiente array de objetos:

const users = [
  {
    name: "Juan",
    age: 25,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
  {
    name: "María",
    age: 30,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pedro",
    age: 20,
    city: "Madrid",
    hobbies: ["fútbol", "programar"],
  },
  {
    name: "Laura",
    age: 35,
    city: "Barcelona",
    hobbies: ["pintar", "leer", "programar"],
  },
  {
    name: "Pablo",
    age: 27,
    city: "Madrid",
    hobbies: ["fútbol", "poker", "programar"],
  },
];

//Crea una función que devuelva un array con los nombres de las personas que viven en Madrid.
const vivenEnMadrid = (users) => {
  return users
    .filter((persona) => persona.city === "Madrid")
    .map((ciudadano) => ciudadano.name);
};
console.log(vivenEnMadrid(users));

//Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años.
const mayoresVeinticinco = (users) => {
  return users
    .filter((persona) => persona.age > 25)
    .map((ciudadano) => ciudadano.name);
};
console.log(mayoresVeinticinco(users));
//Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años y que vivan en Madrid.
const mayoresVeinticincoDeMadrid = (users) => {
  return users
    .filter((persona) => persona.age > 25 && persona.city === "Madrid")
    .map((ciudadano) => ciudadano.name);
};
console.log(mayoresVeinticincoDeMadrid(users));
//persona.city==='Madrid'
leGustaProgamar = users.find((persona) => {
  return persona.hobbies.filter((aficion) => {
    aficion === "programar";
  });
});

console.log(leGustaProgamar);
//Haz la suma de todas las edades de las personas.
sumaEdades = (users) => {
  return users
    .map((edad) => edad.age)
    .reduce((suma, valor) => {
      return suma + valor;
    });
};

console.log(sumaEdades(users));

/* Crea un nuevo array solo con la ciudad de cada persona y su primer hobby. La estructura del array debe ser:

[
  {
    city: 'Madrid',
    hobby: 'fútbol',
  },
  {
    city: 'Barcelona',
    hobby: 'pintar',
  },
  // ...
]*/

const newArray = (users) =>
  users.map((elment) => {
    return { city: elment.city, hobby: elment.hobbies[0] };
  });
console.log(newArray(users));
