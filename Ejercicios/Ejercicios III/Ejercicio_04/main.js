/* crea una función que reciba un array de nombres que le han dado like a una foto, e indica por consola quien ha dado like. En los siguientes formatos:

// Si nadie ha dado like
const likes = [];

'Nadie ha dado like'

// Si solo ha dado like una persona
const likes = ['Juan'];

'Juan ha dado like'

// Si han dado like dos personas

const likes = ['Juan', 'María'];

'Juan y María han dado like'

// Si han dado like tres personas

const likes = ['Juan', 'María', 'Pedro'];

'Juan, María y Pedro han dado like'

// Si han dado like más de tres personas

const likes = ['Juan', 'María', 'Pedro', 'Pablo', 'Laura'];

'Juan, María y 3 personas más han dado like'*/

dieronLike = (nombres) => {
  if (nombres.length === 0) {
    return "¡Nadie ha dado like!";
  } else if (nombres.length < 4) {
    return `${nombres} han dado like`;
  } else {
    return `${nombres[0]} y ${nombres[1]}  y ${
      nombres.length - 2
    } personas más han dado like`;
  }
};

const nombres = ["Cesar", "Yoli", "Luis", "Rafa", "Noa"];
const nombres2 = ["Edu", "Nuria"];
const nombres3 = ["Aberto", "Olga", "Eva"];
const nombres4 = [];
const nombres5 = ["Luci"];

console.log(dieronLike(nombres));
console.log(dieronLike(nombres2));
console.log(dieronLike(nombres3));
console.log(dieronLike(nombres4));
console.log(dieronLike(nombres5));

console.log("hola que tal");
