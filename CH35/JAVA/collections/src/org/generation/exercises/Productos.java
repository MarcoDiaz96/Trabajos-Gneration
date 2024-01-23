package org.generation.exercises;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Productos {
	
	public static void main(String[]args) {
		
		/*
		 * Crear programa que le permita al usuario agregar un id de producto y nombre de producto de forma separada
		 *  Mostrar la lista de productos.
		 * */
		
		
		

		
		        // Inicializar Map para almacenar productos (ID -> Nombre)
		        Map<Integer, String> productos = new HashMap<>();

		        // Scanner para el usuario
		        Scanner scanner = new Scanner(System.in);

		        // Loop para agregar productos
		        int idProducto;
		        String nombreProducto;
		        do {
		            // Solicitar al usuario que ingrese el ID del producto
		            System.out.println("Ingrese el ID del producto (escriba '-1' para finalizar):");
		            idProducto = scanner.nextInt();
		            scanner.nextLine(); // Consumir la nueva línea pendiente

		            if (idProducto != -1) {
		                // Solicitar al usuario que ingrese el nombre del producto
		                System.out.println("Ingrese el nombre del producto:");
		                nombreProducto = scanner.nextLine();

		                // Agregar producto al Map
		                productos.put(idProducto, nombreProducto);
		            }

		        } while (idProducto != -1);

		        // Mostrar lista de productos
		        System.out.println("\n****LISTA DE PRODUCTOS*****");
		        for (Map.Entry<Integer, String> entry : productos.entrySet()) {
		            System.out.println("ID: " + entry.getKey() + ", Nombre: " + entry.getValue());
		        }

		        // Cerrar el objeto Scanner
		        scanner.close();
		    }
		
	}


