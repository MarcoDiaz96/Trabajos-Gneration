package org.generation.letras;

import java.util.Scanner;

/*
 * Crear un programa que le solicite un mensaje al usuario y cuente cuantas vocales, consonantes, numeros y simbolos posee dicho mensaje
 * 	Letras : metodos para interactuar con el usuario
 * LetrasMain: instanciar los objetos.
 * Contador: Metodos para contar vocales, consonantes,numero y caracteres
 */

public class Letras {
	//Para que nuestro usuario interactue definimos un scanner:
	
	Scanner sc = new Scanner(System.in);
	
	//Metemos el scanner dentro de un metodo
	
	public String leerEntrada() {
		return sc.nextLine();
	}
	
	//Metodo para proporcionar contexto al usuario
	
	public void mostrarMensaje(String mensaje) {
		System.out.println(mensaje);
	}

}
