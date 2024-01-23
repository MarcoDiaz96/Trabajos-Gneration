package org.generation.exercises;

import java.util.ArrayList;
import java.util.Scanner;

/*
 * Programa que permite que un usuario agregue nombre y apellido de estudiantes de una universidad, posteriormente muestra la lista de los estudiantes agregados 
 * 
 * --Requerimientos:
 * 
 * 	1. Utilizar ArrayList
 * 	2. Scanner para interactuar con el usuario y permitir que agregue estudiantes (ArrayList de tipo String)
 * 	3. Loop para permitir que se agreguen varios estudiantes (do-while)
 * 	4. Opción para salir del loop con las palabras 'salir' o 'Salir' (if-else, try-catch, switch)
 * 	5. Mostrar lista de estudiantes (for-each)
 * 	6. Opción para eliminar un estudiante de la lista
 */

public class SistemaEscolar {
    public static void main(String[] args) {

        // Inicializar ArrayList para guardar a los estudiantes
        ArrayList<String> estudiantes = new ArrayList<String>();

        // Scanner para el usuario
        Scanner scanner = new Scanner(System.in);

        // Loop para agregar estudiantes
        String nombreEstudiante;
        do {
            System.out.println("Ingrese el nombre completo del estudiante (escriba 'salir' para finalizar):");
            nombreEstudiante = scanner.nextLine();

            if (!nombreEstudiante.equalsIgnoreCase("salir")) {
                // Agregar estudiante a la lista
                estudiantes.add(nombreEstudiante);
            }
            /************** Modificar nuestro programa para permitir salir con las palabras 'Salir' o 'salir'*****************/
        } while (!nombreEstudiante.equalsIgnoreCase("salir") && !nombreEstudiante.equalsIgnoreCase("Salir"));

        // Mostrar lista de estudiantes
        System.out.println("\n****LISTA DE ESTUDIANTES*****");
        for (String estudiante : estudiantes) {
            System.out.println(estudiante);
        }
        
        
       
		 /********* Agreguar la opción que permite que el usuario elimine un estudiante después de haberlo agregado y muestre la lista actualizada después de la eliminación (.remove();).*********/
        
        
        // Preguntar al usuario si desea eliminar un estudiante
        System.out.println("\n¿Desea eliminar a algún estudiante? (Sí/No):");
        String respuestaEliminar = scanner.nextLine();

        if (respuestaEliminar.equalsIgnoreCase("Sí")) {
            // Opción para eliminar un estudiante
            System.out.println("Ingrese el nombre completo del estudiante que desea eliminar:");
            String estudianteEliminar = scanner.nextLine();
            if (estudiantes.contains(estudianteEliminar)) {
                estudiantes.remove(estudianteEliminar);
                System.out.println("Estudiante eliminado exitosamente.");
            } else {
                System.out.println("Estudiante no encontrado en la lista.");
            }

            // Mostrar lista actualizada después de la eliminación
            System.out.println("\n****LISTA DE ESTUDIANTES ACTUALIZADA*****");
            for (String estudiante : estudiantes) {
                System.out.println(estudiante);
            }
        }

        scanner.close();
    }
}