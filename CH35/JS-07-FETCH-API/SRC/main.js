//Programación sincronica
/*function two (){
    console.log("dos");
}

function one (){
    console.log("uno");
    two();
    console.log("tres");
}

one();
console.log("*****************************")
//Programacion asincrona. setTimeout, recibe una funcion anonima y establece un tiempo de ejecucion (en ms, ) para cumlir con la condicion de asincronismo
const twoAsync =()=>{
    setTimeout(() =>{
        console.log("dos Async"); 
    },5000);
    
}

const oneAsync = () =>{
    setTimeout(function(){
        console.log("uno Async");  
    },2000);
    
    
    twoAsync();
    console.log("tres Async");
}

oneAsync();*/

// Trabajando con promesas mediante fetch API

const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
//Si se cumple la promesa, vamos a traer los datos de la API y se convertiran en tipo json para poder mostrarlos en consola
    .then(data => data.json())
    .then(data =>{
        console.log(data);// mostranto en consola todos los usuarios de la API
        console.log(data[0].name);//Mostrando en consola el usuario con indice 0, trayendo solo su nombre
    })
    .catch(error => console.error("¡UPS!, algo salio mal",error));//mensaje de error

