package controlDeFlujo;
import java.util.Scanner;
public class ejerciciosControlFlujo {

	public static void main(String[] args) {//debe coincidir la clase con el nombre del documento
		
		//Recuerda que para que algo se ejecute, siempre debe ir el metodo principal 
		
		// Primero defino una variable de tipo String donde se almacena un dato
		
		/*String viaje = "16-02-2024"; //Dejo en null y despues agrego una fecha
		//Variable declarada o inicializada en null a proposito para tener un espacio de memoria ya asignado y que nos la guarde y solo remplezarlo con un nuevo dato.
		
		if(viaje !=null) {//Variable vacia
			System.out.println("Ya no tenemos fechas disponibles, una disculpa");
			
		}else {
			
			System.out.println("Pude reservar el boleo que usted guste ");
		}*/
		
		
		
		//Validacion de contraseña
				/*Scanner input = new Scanner(System.in);

		        // Solicitar la primera contraseña
		        System.out.print("Ingrese la contraseña: ");
		        String contraseña1 = input.nextLine();

		        // Solicitar la segunda contraseña
		        System.out.print("Ingrese la contraseña nuevamente: ");
		        String contraseña2 = input.nextLine();

		        // Verificar si las contraseñas coinciden
		        if (contraseña1.equals(contraseña2)) {
		            System.out.println("Las contraseñas coinciden. Acceso permitido.");
		        } else {
		            System.out.println("Las contraseñas no coinciden. Acceso denegado.");
		        }

		        // Cerrar el scanner
		        input.close();*/
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////7
		
		// Un switch para seleccionar comida de la dulceria del cine
		
		//Seleccion de opciones,variable que almacena dicha opción.
		
		
	
		

		System.out.println("Bienvenido a la dulceria, ¿Qué desea ordenar?,ingrese la opción deseada :\n"
		+"1. Paletas de sabores\n"
		+"2. Palomitas\n"
		+"3. Refrescos\n"
		+"4. Chocolates\n"
		+"5. Pagar\n");
		
		Scanner input = new Scanner(System.in);
		
		
		int menu = 0;
		char continuar = 'n';	
				
		
		do {
			System.out.println("Seleccione una opcion del 1-5");
		 menu = Integer.parseInt(input.nextLine());
		 
			switch(menu) {
			
			case 1:
				System.out.println("Usted ha elejido la opcion de paletas de saberoes, elija un sabor:\n-Fresa\n-Vainilla\n-Chocolate" );
				break;
				
			case 2:
				System.out.println("Usted ha elejido la opción de palomitas,elija el tamaño de las palomitas\n-Grandes\n-Chicas\n-Medianas");
				break;
				
			case 3:
				System.out.println("Usted ha elejido la opcion de refrescos, elija un tamaño:\n-Grande\n-Chico\n-Mediano" );
				break;
				
			case 4 :
				System.out.println("Usted ha elejido la opcion de chocolates, elija uno:\n-Carlos V\n-Sneakers\n-Milky Way" );
				break;
				
			case 5:
				System.out.println("Todo a quedado registrado, favor de pasar a caja a pagar" );
				continue;
				
				default:
					System.out.println("Opcion no valida, ingrese la opcion correcta" );
					break;
					
					
			}
			
			System.out.println("¿Desea agregar algo más? si-no" );
			
			 continuar = input.nextLine().charAt(0);
			
		}while(continuar =='s' || continuar =='S');
		
		

		input.close();
	}// Main

}//Clase
