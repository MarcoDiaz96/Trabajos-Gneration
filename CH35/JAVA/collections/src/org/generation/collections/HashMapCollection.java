package org.generation.collections;

import java.util.HashMap;
import java.util.Map;

public class HashMapCollection {

	public static void main(String[] args) {
		/**
		 * HashMap almacena elementos en pares "clave/valor" y se puede acceder a ellos mediante index(indices)
		 * no es ordenado y si permite datos duplicados
		 */
		
		HashMap<String,String> capitals = new HashMap<String,String>();
		
		//Agregando elementos "clave/valor"(.put)
		capitals.put("Viilahermosa","Tabasco");
		capitals.put("Chetumal","Quintanaroo");
		capitals.put("Puebla","Puebla");
		capitals.put("Toluca","Edo.Méx");
		capitals.put("Merida","Yucatán");
		capitals.put("Guadalajar","Jalisco");
		capitals.put("Monterrey","Nuevo León");
		
		System.out.println(capitals);
		
		//Map.Entry<> es un método de la interfaz Map que representa una entrada en un Map. Toma como argumento los tipos de datos asignados al HashMap. El usuario asigna el nombre de la interfaz y recibe un método .entrySet() que devuelve el conjunto (Set) de las entrada (clave-valor) en el HashMap.
				//De esta manera ya podemos utilizar los métodos de abajo
		
				for(Map.Entry<String,String> entry:capitals.entrySet()) {
					
					//Mostrar la clave (.getKey()) y el valor (.getValue()) de manera individual para su manipulación
					
					System.out.println(entry.getKey()+ " es la capital de " + entry.getValue());
					
					
				}
				
				//*****************************Ejemplo 02************************************//
				
				Map<String,Integer> calificaciones = new HashMap<String,Integer>();
				
				calificaciones.put("Marco", 9);
				calificaciones.put("Ricardo", 10);
				calificaciones.put("Maribel", 8);
				calificaciones.put("Luis", 10);
				calificaciones.put("Alejandro", 5);
				calificaciones.put("Daniel", 6);
				calificaciones.put("Arturo", 9);
				calificaciones.put("Joaquin", 7);
				calificaciones.put("Ana", 5);
		
				for(Map.Entry<String,Integer> calificacion:calificaciones.entrySet()) {
					System.out.println("La calificacion de " + calificacion.getKey()+ " es de " + calificacion.getValue());
				}
		

	}

}
