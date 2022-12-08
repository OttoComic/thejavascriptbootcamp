//Crea una función que reciba un array de strings y devuelva un array con las strings que empiecen por "a" o "A".


const palabras =[ 'arbol', 'mesa', 'Ana', 'cacahuete', 'asa', 'Tetera'];

const empiezaPorA=(palabras)=>palabras.filter((element) => element.charAt(0)===('A') || element.charAt(0)===('a'));
  

console.log(empiezaPorA(palabras)); 

