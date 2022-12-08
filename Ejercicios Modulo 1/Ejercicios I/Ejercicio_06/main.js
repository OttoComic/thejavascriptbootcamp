//Crea un array de 3 pokemons, el tipo de dato a usar será un objeto

const pokemon=[
  {nombre:"Picachu", tipoDePokemon:"eléctrico"}, 
  {nombre:"Charizard", tipoDePokemon:"fuego"}, 
  {nombre:"Mewtwo", tipoDePokemon:"Psiquico"}
  ];



//Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.

for (let i = 0; i < pokemon.length; i++) {
 const tipo = pokemon[i];
if(tipo.tipoDePokemon==="fuego"){
  console.log ("¡"+tipo.nombre+", es un pokemon de fuego!")
}
};