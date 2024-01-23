package org.generation.collections;

import java.util.ArrayList;
import java.util.Collections;

public class SortMethod {

	public static void main(String[] args) {
		//El metodo.sort permite ordenar los elementos de un ArrayList
		
		ArrayList<Integer> points = new ArrayList<Integer>();
		ArrayList<String> names = new ArrayList<String>();
		
		points.add(5);
		points.add(7);
		points.add(6);
		points.add(10);
		points.add(9);
		points.add(8);
		
		System.out.println(points);//No se encuentran ordenados de menor a mayor, solo como se establecieron en el array 
		
		//Ordenados de menor a mayor utilizando sort
		
		Collections.sort(points);
		System.out.println(points);//Toma en cuenta el ordenamiento en base con la tabla ascii
		
		names.add("arturo");
		names.add("Marco");
		names.add("Luis");
		names.add("Eveida");
		names.add("pablo");
		System.out.println(names);
		//ordenamiento de menor a mayor
		
		Collections.sort(names);
		String carita = "&#188";
		System.out.println(names);
		System.out.println(carita);
		

	}

}
