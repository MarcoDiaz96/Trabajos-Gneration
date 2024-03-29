package org.generation.employee;
/*
 * La estructura basica para crear objetos es la siguinete:
 *  1. Atributos o propiedades
 *  2. Metodo Constructor (1 - n metodos)
 *  3.Metodos del objeto(comportamiento)
 *  4.Metodos Getters y Setters  
 *  5. Metodo toString
 */

public class Employee {
	// 1. Atributos o propiedades
	String nombre;
	String apellido;
	int id;
	double salario;
	String puesto;
	
	//2. Metodo constructor.Tienen el mismo nombre de la clase, no retorna nada, recibe parametros (atributos) y los asigna a variables del constructor (this)
	
	Employee(String nombre,String apellido,int id,double salario,String puesto){
		this.nombre=nombre;
		this.apellido=apellido;
		this.id=id;
		this.salario=salario;
		this.puesto=puesto;
		
	}
	
	//3. Metodos de comportamiento
	
	void trabajar() {
		System.out.println("Estoy trabajando");
	}
	
	void calcularSalario() {
		System.out.println("El salario del empleado " + this.nombre + " " + this.apellido + " es de " + this.salario + " pesos");
	}
	
	void capacitarse() {
		System.out.println("El trabajador del puesto "+this.puesto+"se capacita");
	}
	
	void infoGeneral() {
		System.out.println(" id : " + this.id +" Nombre: " + this.nombre + " Apellido: " + this.apellido);
	}
	
	//4. Getters y Setters.Son metodos que nos permiten obtener o enviar informacion que esta protegida por modificadores de acceso y de esta manera interactuar con nuestros objetos.Los getters nos permiten obtener la info y los Setters nos permiten enviar la info
	
		/*
		 * Estructura de getter:
		 * public tipoDato getNombreVariable(){
		 * 	return nombreVariable
		 * }
		 * 
		 * p.e
		 * 
		 * 		public String getNombre(){
		 * 		return nombre;
		 * }
		 * 
		 * 
		 * Estructura de Setter:
		 * public void setNombreVariable(variable){
		 * 	this.variable =  variable
		 * }
		 * 
		 * p.e
		 * 
		 * 		public void setNombre(String nombre){
		 * 		this.nombre = nombre;
		 * }
		 * 
		 */

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getSalario() {
		return salario;
	}

	public void setSalario(double salario) {
		this.salario = salario;
	}

	public String getPuesto() {
		return puesto;
	}

	public void setPuesto(String puesto) {
		this.puesto = puesto;
	}
	
	//5. Metodo toString.Es un "Override" que se refiere a la capacidad de proporcionar informacion especifica de una clase en forma de cadena de caracteres.Nos permite imprimir nuestros objetos en formato Styring.
	
			//Podemos inicializar toString, dar click derecho -> source -> generate toString ->fields -> generate
	
	@Override //La anotación @Override simplemente se utiliza, para forzar al compilador a comprobar en tiempo de compilación que estás sobrescribiendo correctamente un método, y de este modo evitar errores en tiempo de ejecución, los cuales serían mucho más difíciles de detectar.
	
	
	
	public String toString() {
		return "Employee [nombre=" + nombre + ", apellido=" + apellido + ", id=" + id + ", salario=" + salario
				+ ", puesto=" + puesto + "]";
	}
	
	
	
	
	
	
}







