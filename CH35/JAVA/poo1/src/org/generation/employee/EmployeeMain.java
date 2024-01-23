package org.generation.employee;

public class EmployeeMain {
	public static void main (String[]args) {
		//Instanciar objetos
		
		Employee Marco = new Employee("Marco","Díaz",01,15000d,"Consultor");
		Employee Ricardo = new Employee("Ricardo","Luna",02,35000.56d,"Desarrollador");
		Employee Daniel = new Employee("Daniel","Malodonado",03,8500.36d,"FullStack Developer");
		
		System.out.println(Marco);
		System.out.println(Ricardo);
		System.out.println(Daniel);
		
		//Invocando metodos definidos previamente
		
		Marco.infoGeneral();
		Ricardo.calcularSalario();
		Daniel.capacitarse();
		
		//Utilizar información especifica de cada objeto mediante sus propiedades
		
		//Usando getter
		System.out.println(Marco.getNombre() + " " + Marco.getApellido() + " Ocupa el puesto de: " + Marco.getPuesto());
		
		//Accediendo a la propiedad del objeto
		System.out.println(Marco.puesto + " Gana $" + Marco.salario + " pesos");
		
		//Actualizando información mediante Setter
		
		Marco.setSalario(50600.67d);
		Marco.calcularSalario();
	}

}
