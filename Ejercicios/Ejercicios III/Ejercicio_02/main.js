/*Escribe un programa que permita a alguien adivinar un PIN de 4 dígitos exactamente 3 veces. Si el usuario adivina el número correctamente, imprime "¡Eso fue correcto!" De lo contrario, imprimirá "Lo siento, eso estaba mal." El programa se detiene después del 4º intento o si lo adivinaron correctamente.
Puedes usar este código para obtener el PIN de entrada del usuario:
const pin = prompt('Introduce el PIN:');
*/

var pin = prompt("Introduce un PIN de 4 cifras:");
var i = 0;
while (i < 3) {
  if (pin === "5252") {
    console.log("¡Eso fue correcto!");
    break;
  } else {
    console.log("Lo siento, eso estaba mal");
    i++;
    pin = prompt(`Introduce el PIN (Quedan ${3 - i} intentos):`);
  }
}
