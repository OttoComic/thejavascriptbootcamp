//Crea un formulario con un input de tipo text y un botón de tipo submit.
//Crea un párrafo vacío debajo del formulario.



document.querySelector(".btn").addEventListener("click",()=>
//Al hacer click en el botón submit, pinta en el párrafo el texto que hay en el input.
{document.querySelector("p").textContent=document.querySelector(".text").value;
//Si el texto del input es menor de 5 caracteres, pinta el texto en rojo.
document.querySelector(".text").value.length<5 ? document.querySelector("p").style.color='red': document.querySelector("p").style.color='black';
//Al hacer click en el botón submit, vacía el input.
document.getElementsByClassName("text")[0].value = "";
});
//condición ? expr1 : expr2