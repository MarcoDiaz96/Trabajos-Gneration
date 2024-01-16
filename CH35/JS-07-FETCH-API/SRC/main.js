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

/*const url = "https://jsonplaceholder.typicode.com/users"
//Usando fetch para mostrar en consola
fetch(url)
//Si se cumple la promesa, vamos a traer los datos de la API y se convertiran en tipo json para poder mostrarlos en consola
    .then(data => data.json())
    .then(data =>{
        console.log(data);// mostranto en consola todos los usuarios de la API
        console.log(data[0].name);//Mostrando en consola el usuario con indice 0, trayendo solo su nombre
    })
    .catch(error => console.error("¡UPS!, algo salio mal",error));//mensaje de error*/

/*// Usando fetch para mostrar en navegador
const botonInfo = document.getElementById("btn-mensaje");
const info = document.getElementById("mensaje");
// Variable para guardar la info que se va a traer desde la API, debe ser de tipo NULL
let post = null;
//Consumiendo Appi con fetch (promesas)
botonInfo.addEventListener("click",( )=> {
    fetch("https://jsonplaceholder.typicode.com/users/6")   
    .then(response => response.json())
    .then(response => {
        post = response;//Guardando los datos response en la variable tipo null para modificar el dato
        //mandamos llamar la variable desde la funcion (peroooo, hay que hacerla)
        mostrarDatos(post);
   })
   .catch( error => console.error("¡Hay problemas!,error",error));
});/*
   

//Funcion que permita manipular la variable de tipo null

//Quiero traer name,username,email,phone del user de la API
/*const mostrarDatos = (post) => {
//Creando nodos mediante manipulacion del DOM
const name =document.createElement("h2");
const userName = document.createElement("h3");
const email = document.createElement("p");
const phone = document.createElement("p");

//ponerlos en el html
name.innerHTML = post.name;
userName.innerHTML = post.username;
email.innerHTML = post.email;
phone.innerHTML = post.phone;

//Hacer qeu aparezcan en el navegador 

info.appendChild(name);
info.appendChild(userName);
info.appendChild(email);
info.appendChild(phone);


}

const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click",() => {
    fetch("https://fakestoreapi.com/products")

    .then(response => response.json())
    .then(response =>{
        productos=response
        mostrarProductos(productos);
    })
    .catch(error => console.error("Cuidado",error))
});

const mostrarProductos =(productos) =>{
productos.map((productos) => {
    const titulo =document.createElement("h2");
    const precio =document.createElement("h3");
    const descripcion =document.createElement("p");
    const categoria =document.createElement("p");
    const imagen =document.createElement("img");
    const separador = document.createElement("hr")
    
imagen.src =productos.image;
imagen.width =200;
titulo.innerHTML =productos.title;
precio.innerHTML =productos.price;
categoria.innerHTML =productos.category;
descripcion.innerHTML=productos.description
    
tienda.appendChild(imagen);
tienda.appendChild(titulo);
tienda.appendChild(precio);
tienda.appendChild(descripcion);
tienda.appendChild(categoria);
tienda.appendChild(separador);

})
}

//Metodo Post utilizando fetch. me permite crear recursos en la API

fetch("https://jsonplaceholder.typicode.com/posts",{
    //Indicar que es un metodo de tipo post
    method:"POST",
    //Creo el body de mi nuevo objeto, siguiendo las mismas llaves de l api existente(userID,title,body)
    body: JSON.stringify({
        userId:1986,
        title:"Cronicas Marcianas",
        body:"Ray Bradbury"

    }),
    //definir header
    headers:{
        "Content-type":"application/json; charset=UTF-8"
    }

})
    .then(response => response.json())
    .then(response => {
        console.log(response)

    })*/
    
// *******Programación asíncrona promesas******

//Función flecha de tipo async-await
//Indico que es una funcion asincrona con la palabra reservada "async" antes de los parametros
const getUser = async() =>{
//Para que se compla la promesa no utilizamos then, si no que usamos try. para errores se usa catch
try{
    // Promesa que se ejecuta pero deseamos ponerle retardo para que se ajecute de manera asíncrona, se tiene que crear una nueva promesa que recibe un setTimeout

    await new Promise(resolve=>setTimeout(resolve,3000));
const response  = await fetch("https://jsonplaceholder.typicode.com/users/4");
const data = await response.json();
console.log(data);
} catch(error){
    console.error("Error fatal",error);
}
}
//Invocar funcion, QUE NO SE OLVIDE.

getUser();

//************ Local storage*************

//Nos permite modificar, eliminar,guardar objetos de javascript de manera local (en el equipo)

//Crear un objeto de js con sus llaver y valores

const user = [
    {
    id:1,
    nombre: "Marco",
    apellido:"Díaz",
    email: "marco@live.com",
    posicion:"Estudiante",
    empresa: "Generation"
},
{
    id:2,
    nombre: "Ricardo",
    apellido:"Díaz",
    email: "rick@live.com",
    posicion:"Estudiante",
    empresa: "UNAM"


}
];

//Covertir el objeto creado a notacion JSON y almacenarlo en el localStorage

localStorage.setItem("usuario",JSON.stringify(user));

//Traer el objeto desde localStorage

const users=JSON.parse(localStorage.getItem("usuario"));
console.log(users);
console.log(`${user[1].nombre} con posicion ${user[1].posicion}, trabaja en ${user[1].empresa}`);