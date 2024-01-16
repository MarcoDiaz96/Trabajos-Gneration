package tiposDeDatosYVariables;



public class ejercicioDatos {

	public static void main(String[] args) {
	


		   
		
		
/* COMTARIO
 MULTI
 LINEA*/
		
// Comentario de una sola linea 
		
		/*byte edad;
		edad=31;
		
		* byte edad = 15;
		* 
		* Representa un numero entero, 8 bits (-128 al 127)
		*
		*/
		
		/*byte edad = 27;
		System.out.println("La edad del participante es de : " + edad);
		
		short newUsers = 456; // Representa un numero entero de 16 bits (-23768 al 32767
		System.out.println("Tenmeos : " + newUsers + " Usuarios nuevos");
		
		int totalUsers = 7000;
		System.out.println("Tenmeos un total de : " + totalUsers + " Usuarios");// sirve para represnetar un numero entero de 32 bits (-2147483648 al 2147483648) 
		
		long premiumUsers = 10000000; // Sirve para representar un numero entero con valores mucho mayores
		System.out.println("Tenmeos un total de : " + premiumUsers + " Usuarios");
		
		//Tipos de datos con numeros decimales
		
		float altura = 1.61f; //sirve para repsentar decimales , cuyo valor es de 23 bits
		System.out.println("La altura de del edicio es de : " + altura+ " mts cuadrados");
		
		double peso = 90.416;// Sirve para representar valores numericos con decimales , cuyo valor es de 64 bits
		
		System.out.println("El peso del usuario es de : " + peso+ "kg");
		
		byte userName = 55;//Es una clase para tener cadenas de texto
		byte ticketZone = 30;
		System.out.println("zona a la que pertenece: " +ticketZone);
				
		System.out.println(userName);
		
		char section = 'f';
		System.out.println(section);
		
		boolean currentClient = true;
		System.out.println("Es un cliente frecuente? " + currentClient);
		
		// conversion de tipos
		
		//Casteo a entero
		
		int changueWeight =(int) peso;
		
		// casteo enetero
		
		long changueWeight1 = (long) peso;
		
		System.out.println ("double" + peso);
		System.out.println ("int" + changueWeight);
		System.out.println ("long" + changueWeight1);
		
		
		
		System.out.println("Zona de usuario según su boleto " + (userName* ticketZone));
		
	
			
		
		
		/*
		 * OPERADORES ARITMETICOS
		 * + suma
		 * - resta
		 * *multiplicación
		 *(/) Division
		 *% residuo
		 */ 
		 
		
		/*
		 * OPERADORES DE COMPARACIÓN
		 * == compara si un operador es igual a otro
		 * != compara si es diferente
		 * < mayor que
		 * > menor que
		 * <= mayor igual que
		 * >=  menor igual que 
		 * 
		 */ 
		

		
		//Programa para un cine
		
				double precioEntrada = 75.5;
				double precioPalomitas = 89.70;
				double precioBebida = 35.5;
				int capacidadTotal = 500;
				
				int personasDentro =342;
				
				if (personasDentro > capacidadTotal ) {
					
					System.out.println("Capacidad máxima revasada no puedes ingresar");
				}else {
					System.out.println("Si puedes pasar");
					
				}
		
		double totalEntrada = personasDentro * precioEntrada;
		double totalPalomitas = personasDentro * precioPalomitas;
		
		double totalBebidas = personasDentro * precioBebida;
		
		System.out.println("El precio total de las entradas es : " + totalEntrada);
		System.out.println("El precio total de las palomitas es : " + totalPalomitas);
		System.out.println("El total de personas es :" + personasDentro);
		System.out.println("El precio total de las bebidas es : " + totalBebidas);
		
		
		
		
	}

}

