import './App.css'
import axios from 'axios'

function App() {

  //funcion para funcion async-await para consumir API

  const getUsers = async ( )=>{
    try{
      const response =await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response);
      console.log(response.data[0]);
    }catch(error){
      console.log("peligro",error);
    }
  }

  //Funcion async-await para enviar un usuario

  const postUser = async() =>{
    try{
      const url = "https://jsonplaceholder.typicode.com/posts";
      const user = {
        userId:1986,
        title: "Como programar",
        body: "Marco Díaz"
      }
      const response = await axios.post(url,user);
      console.log(response);
      
      // Para mostrar solo la info en consola seria:
      console.log(response.data);
    }catch(error){
      console.log("Cuidado,error");
    }
  }

  return (
    <>
      <div>
        <h1 className="box">HTTP - Axios</h1>
      </div>
      <div className="card">
        <button onClick={getUsers}>
          Get Method
        </button>
        <button onClick={postUser}>
          Post Method
        </button>
      </div>
    </>
  )
}

export default App
