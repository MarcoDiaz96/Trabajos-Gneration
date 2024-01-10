import './Navbar.css' //Importacion de CSS

//Crear funcion que contiene el marcado para que viva nuestro codigo
const Navbar =() =>{
    return(
        <> {/*Fragmento debe estar encerrado enre llaves y debe ser multilinea*/}

        <div className='navbar--container'>
            <div className='navbar--title'>
                <h1>GenMex-35</h1>

            </div>
            <div className='navbar--links'>
                
                <div className="navbar--link"></div>
                <a href='#'>Home</a>
                <div className="navbar--link"></div>
                <a href='#'>About</a>
                <div className="navbar--link"></div>
                <a href='#'>Astros</a>
                
                

            </div>
            
        </div>

        </>
    )

}

export default Navbar;