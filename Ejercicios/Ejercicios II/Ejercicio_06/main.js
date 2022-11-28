
 //Crea una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.

 const pokemon=[
  {nombre:'Picachu', tipoDePokemon:'eléctrico'}, 
  {nombre:'Charizard', tipoDePokemon:'fuego'}, 
  {nombre:'Mewtwo', tipoDePokemon:'Psiquico'},
  {nombre:'Vulpix', tipoDePokemon:'fuego'}
  
  ];

function muestraNombre(pokemon){
  const nombrePokemons=[];
  for( let i=0; i<pokemon.length; i++){
    nombrePokemons.push(pokemon[i].nombre);
  }
  return nombrePokemons
 }
console.log(muestraNombre(pokemon))

// crea una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon que sea de tipo fuego.

function pokeFuego(pokemon){

  for( let i=0; i<pokemon.length; i++)
  {
    if (pokemon[i].tipoDePokemon==='fuego')
    {console.log( pokemon[i].nombre);
    }
  }
  
 }
pokeFuego(pokemon)
  