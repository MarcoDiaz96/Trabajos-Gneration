// Manipulacion de objetos, nodos desde el DOM
// - Leer y traer nodos del arbol del DOM
// * document.getElementById(trae eleemntos por id)
//document.getElementByClassName (trae elementos por clase)
// document.getElementByTagName(trae elementos por etiquetas)

//getElementById

const titulo = document.getElementById("title1");
console.log(titulo);
console.log(titulo.innerText);

//getElementByClassName
const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length);
console.log(typeof titulos);

//getElementByTagName

const tituloH3= document.getElementsByTagName("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/*
Metodos para llamar elementos mediante sleectores de CSS 
-Se usa para procesos más especificos y la sintaxis querySelector
    -document.querySelector("slector");//#, ; <>
    -document.querySelectorAll(). selecciona los elementos que se especifiquen 


*/ 

//querySelector

const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass=document.querySelector(".title");
console.log(queryClass);

//querySelectorAll

const queryClassAll=document.querySelectorAll(".title");
console.log(queryClassAll);

//Manipular elementos del DOM (styles) con JS 
titulo.style.textAlign = "center";
titulo.style.color = "#5058f2";

//Manipular el texto de un elemento

const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesión de Manipulación de DOM CH35"

titulo2.style.color ="#F23D3D";

/*
METODOS PARA CREAR Y AGREGAR ELEMENTOS EN EL DOM.ESTE PROCESO SE DIVIDE EN DOS PARTES : CREAR EL NODO Y AGREGAR EL NODO
    - CREAR NODOS:
        *document.createElement("element") -- Crea elementos a partir de etiquetas
        *document.createTextNode ("text")-- crea texto dentro de las etiquetas
*/

const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");

// Agregar Nodos, mandamos llamar el elemento padre y le pasamos la propiedad con la constante que guarda el nodo creado

/*
    *parentElement.appendChild(const);
    parentElement.append(const);
    parentElement.insertBefore(const);
    parentElement.insertAdjacentElement(const);

    UTILIZAREMOS MAYORMENTE APPENDCHILD
*/

//OBTENGO ELEMENTO PADRE POR TAG,CLASS O ID;

const parentElement = document.getElementById("dif");

//Crear el  texto que vivira en el  nodo 1:

const textNodo1 = document.createTextNode("Imagen agregada desde el DOM");

nodo1.appendChild(textNodo1);
//INSERTAR NODO 1 en el elemento padre

parentElement.appendChild(nodo1);

// Inserto en el elemnto padre para definirlo posteriormente 

parentElement.appendChild(imgNodo);

//Accedo a la propiedad de imagen

imgNodo.src = "../src/assets/octocat.jpg";

imgNodo.alt = "Octocat-gitHub";
imgNodo.width = "300";

/*
OTRA FORMA DE LEER Y MODIFICAR NODOS
    -document.outherHTML (leer)
    node.innerHTML (escribir sobre el nodo)
*/

const elementOuther = titulo2.outerHTML;
console.log(elementOuther);
titulo2.innerHTML = "Manipulación del DOM CH35";