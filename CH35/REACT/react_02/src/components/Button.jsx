import'./Button.css'
/** 
 * Props Propiedades que se pueden asignar a los componentes para modificar el texto, la información desde la renderización del mismo.
 * Se asignan como paramaetro de la función con el nombre del prop y debe ir enyre llaves
 * Se manda llamar en el bloque de codigo donde se debe implementar utilizando llaves 
*/

const Button =({label}) =>{
    return(
        <>
        <button>
        
        {label}
        </button>
        </>
    )
}

export default Button