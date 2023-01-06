const mensaje=document.querySelector(".mensaje");
const newText=document.querySelector(".parrafoEscrito");
const text=document.querySelector(".form_input");
const submit=document.querySelector(".submit");
const parrafo=document.querySelector(".parrafo");


submit.addEventListener("click",(frase)=>
 
{

frase.preventDefault();
newText.textContent="";
mensaje.textContent="";


let arrTexto=parrafo.textContent.split("");
let arrUsuario=text.value.split("");
const fragment = document.createDocumentFragment();
arrUsuario.forEach((letra,index)=>{
let span = document.createElement('span');
  span.textContent=letra;
  if(letra===arrTexto[index]){
    span.style.color="green";
  }
  else{
    span.style.color="red";
  }
  if(JSON.stringify(arrTexto) === JSON.stringify(arrUsuario)){mensaje.textContent="Esta perfecto.Logro conseguido";} else{mensaje.textContent="vuelve a intentarlo";}
  fragment.append(span);
});
newText.append(fragment);
document.querySelector(".form").reset();
});
 
const btn=document.querySelector(".btn");

btn.addEventListener("click",()=>
{
  newText.textContent="";
  mensaje.textContent="";
const nuevaFrase= otraFrase();
parrafo.textContent=nuevaFrase;

});

function otraFrase()
{
    const frases=[
      "Este año apranderé ingles",
      "Feliz fin de semana",
      "Odio las croquetas",
      "2x2 es iagual a 4",
      "Me he quedado en bucle"
    ]
    //const randomIndex = Math.floor(Math.random() * randomPhraseArray.length);
    const frase=Math.floor(Math.random() * frases.length);
return frases[frase];
  }
