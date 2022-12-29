
const parrafo=document.querySelector(".parrafo");
//Al hacer click en el botón submit, pinta en el párrafo el texto que hay en el input.
document.querySelector(".btn").addEventListener("click",(e)=>

{  e.preventDefault()
    parrafo.textContent=document.querySelector(".text").value;
//Si el texto del input es menor de 5 caracteres, pinta el texto en rojo.
    document.querySelector(".text").value.length<5 ? parrafo.style.color='red': parrafo.style.color='black';
//Al hacer click en el botón submit, vacía el input.
document.querySelector(".form").reset();
});
