
 //Haz los ejercicios anteriores con funciones flecha.
 /*Crea una función que reciba un número y devuelva el doble de ese número.

function doble(numero){

  return numero*2;
 
 }

  console.log(doble(6));*/

 const doble=(numero)=> numero*2;

 console.log(doble(6))

 /*function cuadrado(numero){

  return numero*numero;

 
}

console.log(cuadrado(3));*/

const cuadrado=(numero)=> numero*numero;

console.log(cuadrado(6))

/*
Crea una función que calcule el área de un rectángulo y la muestre por consola.

function areaRectangulo(base, altura){
return base*altura;
}
console.log(areaRectangulo(6, 2));

*/
const areaRectangulo=(base,altura)=> base*altura;

console.log(areaRectangulo(6,2))

/*

//Crea una función que reciba un número y muestre por consola si es par o impar.


function parImpar(numero){

if(numero %2 === 0){
    return `${numero} es un número par`;
}else{

}
 return `${numero} es un número impar`;

}

console.log(parImpar(7))
*/

const parImpar=(numero)=> numero%2===0 ?`${numero} es un número par`:`${numero} es un número impar`;
console.log(parImpar(4))
console.log(parImpar(7))

//const result = words.filter(word => word.length > 6);


//Dado el siguiente array de personas:

const  personas=[
  {nombre: 'Juan', edad: 18},
  {nombre: 'María', edad: 16},
  {nombre: 'Pedro', edad: 20},
  {nombre: 'Pablo', edad: 15},
  {nombre: 'Laura', edad: 19},
];
//Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
const mayoresEdad=(personas)=> personas.filter((persona)=>persona.edad>18);

console.log(mayoresEdad(personas));

//Dime cual es la persona más joven del array.

const masJoven=(personas)=> personas.reduce((persona1, persona2) => persona1.edad < persona2.edad ? persona1.nombre : persona2);
    console.log(masJoven(personas))

//Dime cual es la persona más mayor del array.
      const masMayor=(personas)=> personas.reduce((persona1, persona2) => persona2.edad > persona1.edad ? persona2.nombre : persona1);
    console.log(masMayor(personas))

 //Crea una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.

 const pokemons=[
  {nombre:'Picachu', tipoDePokemon:'eléctrico'}, 
  {nombre:'Charizard', tipoDePokemon:'fuego'}, 
  {nombre:'Mewtwo', tipoDePokemon:'Psiquico'},
  {nombre:'Vulpix', tipoDePokemon:'fuego'}
  
  ];
  const muestraNombre= (pokemons)=> pokemons.filter((pokemon)=>console.log(pokemon.nombre));
  muestraNombre(pokemons);
// crea una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego.
const pokemonFuego= (pokemons)=> pokemons.filter((pokemon)=>pokemon.tipoDePokemon==='fuego'? console.log(pokemon.nombre):false);
pokemonFuego(pokemons)
 