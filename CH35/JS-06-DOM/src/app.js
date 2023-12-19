const botonRandom = document.getElementById("btn");
const botonReset =  document.getElementById("reset");
const colorFondo = document.body.style.backgroundColor;

//Declarar funcion que genere un número RANDOM , tomando un parametro number

const random = (number)=>{
    return Math.floor(Math.random() * (number +1));
}



//Crear evento de clock para que cuando presione el boton pase algo

botonRandom.addEventListener("click", () => {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = randomColor;
});



//boton de reset

botonReset.addEventListener("click",()=>{
    document.body.style.background = colorFondo;
})

