// minutos-segundos

function minutes(minutos){
return minutos*60;

}

let resultado = minutes (50);
console.log(`50 minutos en segundos son : ${resultado} segundos`);

// incremento +1

function incrementarNumero(numero) {
    return numero + 1;
  }
  
  // Ingresando el numero 5
  let numeroInicial = 5;
  let resultado2 = incrementarNumero(numeroInicial);
  
  console.log("Número inicial: " + numeroInicial);
  console.log("Número incrementado: " + resultado2);

  //Area del triangulo

  function AreaTriangulo(x,y) {
    return (x*y)/2;
}
    let baseTriangulo = 10;
    let alturaTriangulo = 18;
    let resultado3 = AreaTriangulo(10,18)


  console.log(`Altura del triangulo : ${alturaTriangulo} y su base es :${baseTriangulo} ; por lo tanto, su area es : ${resultado3} `);

  // convertir años a dias naturales

  function years(años){
    return años*365;
    
    }

    let cantAños = 20;
    let resultado4 = years (20);
    console.log(`La cantidad en años a dias es : ${cantAños} años ; por lo tanto el resultado es : ${resultado4} dias `);

    // Calculadora de potencia

    function calcularPotencia(corriente, voltaje) {
        // Verificar si las entradas son números
        if (isNaN(corriente) || isNaN(voltaje)) {
          return "Por favor, ingrese valores numéricos válidos.";
        }
      
        // Calcular la potencia
        let potencia = corriente * voltaje;
      
        // Devolver el resultado
        return potencia;
      }
      
      // Ejemplo de uso
      let corrienteUsuario = 2
      let voltajeUsuario = 150
      
      // Calcular la potencia utilizando la función
      let resultadoPotencia = calcularPotencia(corrienteUsuario, voltajeUsuario);
      
      // Mostrar el resultado
      console.log(` La corriente es : ${corrienteUsuario} Amperes , El voltaje es : ${voltajeUsuario} Volts ; por lo tanto , la potencia es:  ${resultadoPotencia} watts.`);
  

