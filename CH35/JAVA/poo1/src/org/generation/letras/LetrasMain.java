package org.generation.letras;

public class LetrasMain {

public static void main(String[]args) {
	//Instanciar objetos (Letras y Contador)
	
	Letras letras = new Letras();
	letras.mostrarMensaje("Escribe un texto y te mostrare el numero de vocales, consonantes, simbolos y numeros");
	String palabra = letras.leerEntrada();//Guardamos texto introducido por usuario en una variable
	
	//Invocar los metodos que permiten contar los caracteres
	Contador contador = new Contador();
	
	int totalVocales = contador.contarVocales(palabra);
	System.out.println("Hay " + totalVocales + " vocales");
	int totalNumeros = contador.contarNumeros(palabra);
	System.out.println("Hay " + totalNumeros + " numeros");
	int totalConsonantes = contador.contarConsonantes(palabra);
	System.out.println("Hay " + totalConsonantes + " Consonantes");
	int totalSimbolos= contador.contarSimbolos(palabra);
	System.out.println("Hay " + totalSimbolos + " simbolos");
	
	}
}

