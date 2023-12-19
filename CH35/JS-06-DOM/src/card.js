/*
Para manipular la información de un usuario, necesito crear un perfil mediante un objeto de javascript

*/

const user = {
    username:"marcoantonio96",
    age:37,
    email:"marcoantonio1906@live.com",
    favfilms:['nueva','peli','chucky']

}

// Crear una funcion que me permita ingresar el objeto del perfil en el nodo padre

const createUser = (user) =>{
    document.getElementById("username").textContent = user.userName;
    document.getElementById("age");textContent = user.age;
    document.getElementById("email").textContent = user.email;
    //Mostrando elementos de lista en forma de lista
    //Para mostrar ek array en forma de lista utilizamos un ciclo forecah para recorrer todo el array y traer cada elemento a la litsa

const ul = document.getElementById("fav-films");
user.favfilms.forEach(film => {
    const li = document.createElement("li");
    li.textContent = film;
    ul.appendChild(li);

});

//modificando estilos de la ul para quitar viñetas

ul.style.listStyle ="none";
ul.style.padding = "0";
ul.style.color = "#D9B70D";


    //mostrando elementos de lista en forma de fila
    //document.getElementById("fav-films").textContent =user.favfilms;
}

createUser(user);

// Eventos para actualización de el username el input y el boton

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("userEmail");
const profileBtn = document.getElementById("btn-main");
const userName = document.getElementById("username");
const email = document.getElementById("email");

profileBtn.addEventListener("click",()=>{
    userName.textContent = inputName.value;
    email.textContent = inputEmail.value;
});





