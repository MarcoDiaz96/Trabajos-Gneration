package ciclosBucles;

public class doWhileLoop {

	public static void main(String[] args) {
		/*
		 * Ciclo do while,evalua la expresion en la parte inferior del ciclo.
		 * Por tanto, las declaraciones dentro del bloque "do" siempre se ejecutan al menos una vez.
		 * */
		
		//cuenta del 1 a 20
		int cuenta =1;
		do {
			System.out.println("cuenta" + cuenta);
	cuenta ++;
		}while(cuenta<0);//output 1 ya se ejecuto al menos 1 vez

	}

}
