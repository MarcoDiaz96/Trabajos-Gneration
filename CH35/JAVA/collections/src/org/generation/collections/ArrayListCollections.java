package org.generation.collections;

import java.util.ArrayList;
import java.util.Arrays;

public class ArrayListCollections {

	public static void main(String[] args) {
		//**********************Arrays***********************//
		
		String[] names= {"Jonathan","Arturo","Marco","Ruben","Ana","Elizabeth","Cecilia","Victor","Lizbeth"};
		
		///Imprimiendo arrays
		System.out.println(Arrays.toString(names));
		
		int[] edades = {27,23,58,54,20,13,15,17};
		System.out.println(Arrays.toString(edades));
		
		//Acceder a cada elemento del Array
		
		String name1 =names[2];
		System.out.println("El primer nombre de la lista es: "+name1);
		int edad1 = edades[3];
		System.out.println("La edad de " + name1+" es de "+edad1+" años");
		
		//Obtener la longitud del array
		int longitudNames = names.length;
		System.out.println("El array names tiene " + longitudNames + " elementos");
		
		//Obtener el ultimo elemento
		
		String ultimoElemento = names[longitudNames-1];//La longitud ya vive en la variable longitudNames
		System.out.println("El ultimo elemento del array Names es: "+ultimoElemento);
		
		//Mostrar cada elemento utilizando forEach
		for(String name:names) {
			System.out.println(name);
		}
//**************************** ArrayList**************************************//
		
		// ArrayList es un array que puede cambiar de tamaño.Es la clase de java que representa la estructura de datos de arrays.Permite elementos duplicados y recibe varios metodos para su manipulación
		
		ArrayList<String> films= new ArrayList<String>();
		
		ArrayList<Integer> matricula = new ArrayList<Integer>();//Wrapper class
		ArrayList<Character> Characters = new ArrayList<Character>();
		
		
		//Agregar elementos
		
		films.add("Exorcista");
		films.add("HarryPotter");
		films.add("Chucky");
		films.add("Narnia");
		films.add("Nemo");
		films.add("Rapido y furioso");
		
		System.out.println(films);
		// obtener un elemento : name.get(index)
		
		String film1 = films.get(0);
		System.out.println("La primer pelicula es: "+film1);
		
		//Modificar un elemento
		String film3 = films.set(2, "Momento");
		String film2Get = films.get(3);
		System.out.println(film2Get);
		
		//Conocer tamaño de arraylist mediante size();
		int sizeFilms = films.size();
		System.out.println("El tamaño del ArrayList films es de " +sizeFilms+" elementos");
		
		//Agregar elemento y despues eliminarlo
		
		films.add("The fountain");
		System.out.println(films);
		
		films.remove(6);
		System.out.println(films);
		
		//Mostrando los elementos en lista
		
		System.out.println("***Films en lista*****");
		
		for(String film:films) {
			System.out.println(film);
		}
		
		
		
	}

}
