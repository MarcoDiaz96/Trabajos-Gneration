/* paradigmas de porgramacion

Programacion imperativa: Se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada


Programacion basada en eventos: Se basa en la gestion y respuesta de eventos 

Programacion declarativa: Explicar lo que queremos obtener.


Programacion orientada a objetos: Toma cierta informacion o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus caracteristicas (propiedades o atributos) y sus comportamientos o acciones (metodos).

*/

//Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de onjeto y crear instancias de este tipo de objeto.

/*class persona{ 

    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

//objetos
//El constructor es una funcion especial, cuya finalidad es la de construir o instanciar objetos
//para inicializar un objeto es necesario definir un constructor que tomara a los atributos 
// clases= molde Objeto = gomita constructor= chefsitx atributos= ingredientes metodos=comportamientos 

constructor (nombre, apellido, edad, email, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
}

comer(){
    console.log("Bon apetit");
}//metodo comer

bailar (){
    console.log("Dale hasta el suelo");
}//metodo bailar 

cantar (){
    console.log("Cantas muy bien");
}

viajar(){
    console.log("Buen Viaje");
}

mostrarInfo(){
    console.log("Nombre: ",this.nombre);
    console.log("Apellido: ", this.apellido);
    console.log("Edad: ",this.edad);
    console.log("Email: ",this.email);
    console.log("Telefono: ",this.telefono);
}
}

let usuario1 = new persona("Marco", "Díaz", "31","marc65@gmail.com","657865432");
let usuario2 = new persona("Luis", "Gonzalez", "23","cucho.luisQhotmail.com","786534251");
let usuario3 = new persona("Pablo", "Merced", "20","pab345@live.com","76534256523");
let usuario4 = new persona("Laura", "Camacho", "31","lau54@gmail.com","8897654323");
let usuario5 = new persona("Pedro", "Sámano", "50","peter87@hotmial.com","9876453256");
let usuario6 = new persona("Ricardo", "Pérez", "40","ricpe76@live.com","8765453423");

console.log(usuario1);
console.log(usuario2.email);
console.log(usuario1.email,usuario2.email,usuario3.email,usuario4.email,usuario5.email,usuario6.email);

usuario4.comer();
usuario1.viajar();

usuario3.mostrarInfo();

//Pilares de la programación orientada a objetos

/*
Herencia
Polimorfismo
Encapsulamiento
Abstraccion

**Herencia: Nos permite heredar  a clases inferiores para poder optimizar el programa
*/

/*class arrendador extends persona{//subclase
    capacidad =0;
    costo = 0;
    nombreLugar = "";

    constructor(nombre, apellido, edad, email, telefono,capacidad,costo,nombreLugar){
        super(nombre,apellido,edad,email,telefono);
        this.capacidad =capacidad;
        this.costo = costo;
        this.nombreLugar = nombreLugar;
    }

    mostrarInfo(){
        console.log("capacidad :",this.capacidad,"Personas");
        console.log("costo :",this.costo," $ MXN");
        console.log("nombreLugar :",this.nombreLugar);
    }
}

let arrendador1 = new arrendador("Maribel","León","55","maril67@gmail.com","5648345263",100,25000,"Lugar Magico");

console.log(arrendador1);
console.log("El costo de arrendador es: $" + arrendador1.costo + " MNX");
arrendador1.mostrarInfo();

/*class arrendadorGdl extends arrendador{//sub clase/ clase nieto

}*/

/*class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
  
  class Gato extends Animal {
    sonido() {
      console.log('Miau');
    }
  }
  
  const perro = new Perro();
  const gato = new Gato();
  
  perro.sonido();  
  gato.sonido();/*/





  // **POLIMORFISMO**

  // Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento.Se refiere a tener objetos de diferentes tipos que pueden ser manipulados en comun NOTA: Nos da la posibilidad de realizar cambios en distintos objetos

  /*class producto{
    marca = "";
    precio = 0;

    constructor(marca,precio){

    this.marca=marca;
    this.precio = precio;
}
    mostrarDesc(){
        console.log("Marca ");
        console.log("Precio ");
    }
  }

  let producto1 = new producto("XBOX SERIES S",6000)

  //Encapsilamiento:  ocultar la implementacion de un objeto y solo mostrar los datos que sean necesarios

  class usuario{
    #contraseña;

    constructor(userName,correo,contraseña){
        this.userName=userName;
        this.correo = correo;
        this.#contraseña = contraseña;
    }
    verifyPass(contraseña){
        return this.#contraseña === contraseña;
      
      }
  }

  
  //Abstraccion: Es traer objetos del mundo real y poder aplicarlos a la programación mediante clases,metodos,constructores y objetos

  //Los objetos de tipo Json en un formato de intercambio de datos liegero,accesible,estructurado,manipulable (DOM) y que nos brinda una mejor comunicación entre el cliente y servidor.Esto es gracias a que son más flexibles y generalmente se ejecutan con fetch

  let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",

}


console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",

}


console.log(objetoLiteral);*/

//Principios Solid: 

// 1.  Principio de repsonsabilidad unica(Single Responsability Principle SRP):Una clase debe tener asignada una tarea o responsabilidad especifica y esta no debería de cambiar

/*
2. Principio abierto/cerrado(open/closed principle OCP)
Una clase puede estar abierta a extensiones y agregar nueva funcionalidades,pero sin generar cambios en la misma

3. Principio de sustitucion de Liskov (Liskov sustitution Principle LSP)
Una clase hijo puede sustituir objetos de una clase padre

4. Principio de segregación de interfaces (Interface segregation Principle ISP)

5. Principio de inversión  de dependencias(Dependency inversion Principle DIP)
Los modulos de alto nivel, no deben tener dependencia de los modulos de bajo nivel, los dos deben depender de abstracciones, es decir, en lugar de que un componente de alto nivel dependa de uno de bajo nivel, las dos deben depender de interfaces o clases abstractas
*7*/ 


//PROGRAMA QUE CONSTE DE UNA CLASE LLAMADA ALUMNO QUE TENGA COMO ATRIBUTOS NOMBRE,CALIFICACIÓN.DEFINIR LOS METODOS PARA INICIALIZAR SUS ATRIBUTOS (CONSTRUCTOR), IMPRIMIRLOS Y MOSTRAR UN MENSAJE CON EL RESULTADO DE SI LA CALIFICACION ES APROBATORIA  O NO


class Alumno {
    // Constructor para inicializar los atributos
    constructor(nombre, calificacion) {
      this.nombre = nombre;
      this.calificacion = calificacion;
    }
  
    // Método para imprimir los atributos del alumno
    imprimirInformacion() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Calificación: ${this.calificacion}`);
    }
  
    // Método para mostrar un mensaje sobre la aprobación o no del alumno
    mostrarResultado() {
      if (this.calificacion >= 6) {
        console.log(`${this.nombre} ha aprobado.`);
      } else {
        console.log(`${this.nombre} no ha aprobado.`);
      }
    }
  }
  
  // Crear una instancia de la clase Alumno
  const alumno1 = new Alumno('Juan', 8);
  
  // Imprimir información del alumno
  alumno1.imprimirInformacion();
  
  // Mostrar resultado de la calificación
  alumno1.mostrarResultado();