package org.generation.letras;

/*Contador: Metodos para contar vocales, consonantes,numero y simbolos
 * Establecer dos grupos de metodos
 * 
 * 	Grupo 1: metodos booleanos para determinar a que tipo de caracteres corresponde
 * Grupo 2 : metodos que van a devolver el conteo de dichos carecteres
 * 
 */

public class Contador {
	
	//Grupo 1
	public boolean esVocal(char caracter) {
		return (caracter == 'a' || caracter == 'e' || caracter == 'i' || caracter =='o' || caracter =='u' || caracter == 'A' || caracter == 'E' || caracter == 'I' || caracter =='O' || caracter =='U' );
	}
	
	public boolean esNumero(char caracter) {
		//casting para poder utilizar la tabla ASCII (48-57)
		short codigoAscii =(short)caracter;
		
		return codigoAscii >= 48 && codigoAscii <=57;
	}
	
	public boolean esConsonante(char caracter) {
		//casting para poder utilizar la tabla ascii (65-90 y 97-122),con excepcion de vocales
		short codigoAscii = (short)caracter;
		return (codigoAscii >= 65 && codigoAscii<=90) || (codigoAscii>=97 && codigoAscii <=122) && !esVocal(caracter);
	}
	
	public boolean esSimbolo(char caracter) {
		
		return !(esVocal(caracter) || esNumero(caracter)|| esConsonante(caracter));
	}
	
	
	//Grupo 2
	
	public int contarVocales(String palabra){
		int vocales = 0;
		for(char caracter:palabra.toCharArray()) {
			if(esVocal(caracter)) {
				vocales++;
				
			}
			
			
		}
		return vocales;
	}
	
	public int contarNumeros(String palabra){
		int numeros = 0;
		for(char caracter:palabra.toCharArray()) {
			if(esNumero(caracter)) {
				numeros++;
				
			}
			
			
		}
		return numeros;
	}

	public int contarConsonantes(String palabra){
		int consonantes = 0;
		for(char caracter:palabra.toCharArray()) {
			if(esConsonante(caracter)) {
				consonantes++;
				
			}
			
			
		}
		return consonantes;

	
	}
	
	public int contarSimbolos(String palabra){
		int simbolos = 0;
		for(char caracter:palabra.toCharArray()) {
			if(esSimbolo(caracter)) {
				simbolos++;
				
			}
			
			
		}
		return simbolos;
	}
}
