package operadoresLogicos;

public class EjercicosDeOperadores {

	public static void main(String[] args) {
		/*Operador AND devuelve true si ambas expresiones son verdaderas
		 * || operador or devuelve true si almenos una de las dos condiciones se cumple
		 ! operador not si la expresion booleana es flase devuelve true y viceversar 
		 */
int anios = 5;

boolean esNino = true;
boolean costoNino = anios <=12 && esNino;
System.out.println("Es niño " + costoNino);





String cliente = "cliente123";
String credenciales = "marcoverksof123";

boolean credencialCorrecta = cliente.equals("cliente123") && credenciales.equals("marcoverksof123");
System.out.println("Las credenciales son validas " + credencialCorrecta);

//|| or
double costoPasaje = 380.50;
int edad = 50;
boolean credenIna = false;

boolean descuentoAdultoMayor = edad >= 60 || credenIna;

System.out.println("Tiene descuento?" + costoPasaje);

//! NOT

boolean asientosDisp = true;
boolean libres = true;
boolean asientosDesc = !libres;

System.out.println("Tenemos asientos con descuento" + asientosDesc);


// ejemplo autubus




	}

}
