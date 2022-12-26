//Teniendo en cuenta el siguiente array de objetos

const animals = [
  { name: 'Lion King', isCarnivore: true },
  { name: 'Plant', isCarnivore: false },
  { name: 'Ant', isCarnivore: true },
  { name: 'Bee', isCarnivore: true },
  { name: 'Mouse', isCarnivore: true }
];

//Crea 2 listas, una para carnívoros y otra para herbívoros.
const app = document.querySelector(".app");

const ulCarnivoros= document.createElement("ul");
ulCarnivoros.textContent="Lista de animales carnívoros";


const ulHervivioros= document.createElement("ul");
ulHervivioros.textContent="Lista de animales hervívoros";

const fragment = document.createDocumentFragment();
animals.forEach((animal)=>{

    const li= document.createElement("li");

    li.dataset.isCarnivore=animal.isCarnivore
    if(li.dataset.isCarnivore==="true"){
        li.textContent = animal.name+"🍖";
    ulCarnivoros.append(li);
}else{
    li.textContent = animal.name+"🌱";
    ulHervivioros.append(li);

}
   
})
app.append(ulCarnivoros,ulHervivioros);


//Intenta evitar el reflow a la hora de añadir elementos a las listas.

//Quiero que se le añada la clase carnivore a los carnívoros y la clase herbivore a los herbívoros.
ulCarnivoros.classList.toggle('carnivore'); 
ulHervivioros.classList.toggle('Hervivore'); 
//A los carnívoros quiero que se les añada un emoji 🍖 y a los herbívoros🌱. Al final de cada nombre.


