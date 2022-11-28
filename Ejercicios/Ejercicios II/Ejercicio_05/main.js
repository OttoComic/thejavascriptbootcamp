
//Dado el siguiente array de personas:

const  personas=[
  {nombre: 'Juan', edad: 18},
  {nombre: 'María', edad: 16},
  {nombre: 'Pedro', edad: 20},
  {nombre: 'Pablo', edad: 15},
  {nombre: 'Laura', edad: 19},
];



  //Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
function mayoresEdad(personas){
  var nombres=[]
  for (let i = 0; i < personas.length; i++) {

  if( personas[i]['edad']>18){
  nombres.push(personas[i]['nombre'])}
 
  }
  return(nombres)
}
  console.log(mayoresEdad(personas))

  //Dime cual es la persona más joven del array.

  function masJoven(personas){
    
    var joven = personas[0]['edad'];
  
    for(i = 0; i < personas.length; i++){
        if (personas[i]['edad'] <joven)
        {
            joven = personas[i]['edad'];
        var  nombreJoven=personas[i]['nombre'];
        }
    } 
      return nombreJoven
    
  }
  console.log(masJoven(personas))


  //Dime cual es la persona más mayor del array.

  function masMayor(personas){
    
    var mayor = personas[0]['edad'];
  
    for(i = 0; i < personas.length; i++){
        if (personas[i]['edad'] >mayor)
        {
            mayor = personas[i]['edad'];
        var  nombreMayor=personas[i]['nombre'];
        }
    } 
      return nombreMayor
    
  }
  console.log(masMayor(personas))