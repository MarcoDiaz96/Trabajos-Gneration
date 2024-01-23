package funciones;

import java.util.Scanner;

public class funcionDesc {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Ingrese el valor de su producto: ");//obtener el precio del producto
		double precioProducto = sc.nextDouble();
		
		double porDesc= 15;// obtener porcentaje de descuento
		double desc = calDesc(precioProducto,porDesc);
		
		double porcentajeImpuesto=3;//obtener el impuesto
		double impuesto = calcularImpuesto(precioProducto,porcentajeImpuesto);
		
		double total =calcularTotal(precioProducto,desc,impuesto);//calcular el total
		
		total = redondear(total,2);
		System.out.println("Precio del producto: $"+precioProducto);
		System.out.println("Descuento aplicado al producto: $"+desc);
		System.out.println("Impuesto aplicado: $"+impuesto);
		System.out.println("Total a pagar: $"+total);
		

	}
	
	
	static double calDesc(double precioProducto,double porDesc){//funcion para calcular el descuento
		return(precioProducto*porDesc)/100;
		
	}
	
	static double calcularImpuesto(double precioProducto,double porcentajeImpuesto) {
		return(precioProducto*porcentajeImpuesto)/100;
	}
	
	static double calcularTotal(double precioProducto,double desc,double impuesto) {
		return (precioProducto-desc)+impuesto;
	}
	
	static double redondear(double valor,int decimales) {
		double factor=Math.pow(10,decimales);
		return Math.round(valor*factor)/factor;
	}
}

/* La refactorización es reestructurar codigo que ya existe sin alterar su comportamiento. Tiene como objetivo mejorar la legibilidad */
