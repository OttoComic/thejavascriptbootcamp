/*Crea una función que permita comprobar si un string es un palíndromo.
Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
*/

const palindromo = (palabra) => {
  const palabraReversed = palabra.split("").reverse().join("");

  return palabraReversed === palabra ? "es palindromo" : "no es palindromo";
};
console.log(palindromo("oso"));
console.log(palindromo("mesa"));
//Ahora haz la misma comprobación pero con un array de strings.
const arrayDePalindromos = ["hola mundo", "somos o no somos"];

const arrayActual = (arrayComprobacion) => {
  const arrayUnido = arrayComprobacion.map((palindromo) =>
    palindromo.split(" ").join("")
  );

  const arrayReverse = arrayUnido.map((palindromo) =>
    palindromo.split("").reverse().join("")
  );

  return arrayUnido.map((palindromo, index) => {
    if (palindromo === arrayReverse[index]) {
      return "es un palindromo";
    } else {
      return "no es un palindromo";
    }
  });
};

console.log(arrayActual(arrayDePalindromos));
