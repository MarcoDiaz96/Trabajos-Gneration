import './Products.css'


/*const Products =(props) =>{*/
const Products = ({ img, name, description, price }) => {
    return(
        <>
       {/* Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información
       
       <div className='cards'>
            <div className='products--card'>
                <img src='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933' alt='sneakers'/>
                <h3>Fashion</h3>
                <p>Tenis Fitness Running Purple</p>
                <h4>$1948</h4>
            </div>
    </div>*/}

    {/*Props Estructurados.Puedo asignar diferentes propiedades a un div sin tener que generar mucgos props, solAMENTE USANDO LA PARALABRA RESERVADA 'PROPS' como parametro de la función. Quiero modificar  varias propiedades puedo mandar a llamar a las props dentro de cada elemento, como si fueran metodos */}

       {/*} <div className='cards'>
            <div className='products--card'>
                <img src={props.img} alt='Sneakers'/>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.precio}</h4>
            </div>
        </div>
        </>
    )
}*/}

{/*Props desestructurados. Permite asignar datos de un objeto a una variable separada para que dicha variable pueda contener los datos provenientes del objeto.
        * No utilizamos `props` como parámetro de la función, sino que, asignamos parámetros a cada elementos y los llamados directamente en dichos elementos.
        * Los props desestructadores viven como parámetros, pero entre llaves y se les asigna un nombre específico 
*/}

<div className="cards">
            <div className="products--card">
                <img src={img} alt='sneakers' />
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>
        </div>
</>
    )
}
export default Products