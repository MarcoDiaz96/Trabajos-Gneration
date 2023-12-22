//Creando función para determinar si un numero es par o 
//Necesitamos exportar esta funcion para que pueda ser utilizada en cualquier parte dle proyecto,solamente llmando al script.Para ello tenemos que agregar las palabras reservadas  'export default'
//NOTA : No puede ser función flecha si no funcion por declaración,por commonJS
export default function detParImpar(numero) {
    (numero % 2 === 0)? console.log(` El numero ${numero} es par`): console.log(`El numero ${numero} es impar`);
};
