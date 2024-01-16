package operadoresLogicos;

public class ejercicioAutobus {

	public static void main(String[] args) {
		
		int costoBoleto = 350;
		int asientos = 62;
		int asientosParaAdulto = asientos - 58;
		int estudiantes = asientos -56;
		double descIna= 0.35f;
		double descEstu = 0.3f;
		int edad = 60;
		boolean credIna = true;
		boolean credEst = true;
		
		boolean esMayor = edad >=60 || credIna;
		boolean esEstudiante = credEst;
		System.out.println("Tiene desc de estuandiante? " + descEstu + esEstudiante);
		System.out.println("Tiene descuento? : " + descIna + esMayor);
		System.out.println("El costo de boleto es de : " + costoBoleto);
		System.out.println ("El total de asientos es de : " +asientos);
		System.out.println("La cantidad de asientos para adultos es : " + asientosParaAdulto);
		System.out.println("La cantidad de asientos para estudiantes es de :  " + estudiantes);
		
		
		
		
		

	}

}
