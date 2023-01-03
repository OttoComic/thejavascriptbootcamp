const btn=document.querySelector(".btn");
 const color_code=document.querySelector(".color-code");
 const color_container=document.querySelector(".color-container");

btn.addEventListener("click",(color_aleatorio));


  
function color_aleatorio(){
 
 var caracteres = '0123456789ABCDEF';
 var color = '#';
 for (let i = 0; i< 6; i++) {
    color =color+ caracteres[Math.floor(Math.random() * 16)];
 }
color_container.style.backgroundColor=color;
color_code.textContent = color;

  }
