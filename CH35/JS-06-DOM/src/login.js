const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
//Regex: expresiones regulares.Determinan patrones que se deben cumplir
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//Deshabilitar boton

submitButton.disabled=true;

/*
Creando evento para input, el cual evaluara el patron de expresion regular y en caso de cumplir con el patron,habilitara el buton y podremos ser redirigidos a la pagina index.html

- Se obtiene el valor actual del campo email(input) usando e.target.value y se almacena en una variable (text).

-Se evalua la REGEX


*/

emailInput.addEventListener("input",(e)=>{
    const text =e.target.value;

    if(emailREGEX.test(text)==true){
        submitButton.disabled = false;

    }
})
