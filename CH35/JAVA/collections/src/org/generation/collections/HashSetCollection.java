package org.generation.collections;

import java.util.Arrays;
import java.util.HashSet;

public class HashSetCollection {

	public static void main(String[] args) {
		//Hashset es una clase de collections donde cada elemento es unico, es decir no se repiten elementos 
		
		HashSet<String> animals = new HashSet<String>();
		animals.add("Buho");
		animals.add("Caballo");
		animals.add("Perro");
		animals.add("Gato");
		animals.add("Ornitorrinco");
		animals.add("Cebra");
		animals.add("Mapache");
		animals.add("Ornitorrinco");
		animals.add("Capibara");
		
		//Imprimir el HashSet
		System.out.println(animals);
		
		//Metodo Contains(): permite conoccer si un elemento se eencuentra dentro del set

		System.out.println(animals.contains("Capibara"));
		
		//Remove() eliminar un elemento
		animals.remove("Cebra");//elimino
		
		System.out.println(animals);
		
		//Agregando elementos en una sola linea
		animals.addAll(Arrays.asList("Perrito","Gatito","Lorito","pez"));
		
		System.out.println(animals);
		
		/*
		 * La clase HashSet no va a garantizar que los elementos se muestren en el orden establecido ya que busca eficientar la busqueda y recuperación de los elementos 
		 * Utiliza tablas Hash para almacenar los elementos y mostrarlos al usuario
		 **/
		
		//limpiar el HasSet .clear()
		
		animals.clear();
		System.out.println(animals);
	}

}
