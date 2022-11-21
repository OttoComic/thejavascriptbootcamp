const pokemon=["Picachu", "Charizard", "Mewtwo"];

//Mostrar por consola cada elemento en una fila
console.log(pokemon[0]);
console.log(pokemon[1]);
console.log(pokemon[2]);
//Mostrar por consola todos los elementos en una linea
console.log(pokemon[0],pokemon[1],pokemon[2]);
//Mostrar por consola mediante un bucle

for (var i = 0; i < pokemon.length; i++) {
    console.log(pokemon[i]);  
};

for (const pokemons of pokemon) {
    console.log(pokemons);
  };
  pokemon.forEach((pokemons) => {
    console.log(pokemons);
  });
  