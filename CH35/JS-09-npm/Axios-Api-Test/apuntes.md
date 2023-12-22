 ## AXIOS API
1. revisar el sitio oficial de axios [https://axios-http.com/es/]
2. instalar axios desde npm con el comando
´´´´
    sh
npm install axios
´´´´
3. ejecutar el proyecto de react en el navegador con el comando:
´´´´
    sh
    npm run dev
    ´´´´
## Manejo axios
1. En el archivo App.js, importar axios
´´´´ 
    javascript
import axios form 'axios'
´´´´
2. Crear la funcion de de tipo async await para consumir una API
3. Indicamos el evento en línea para el primer botón, con el tipo de evento y la función a ejecutar 
```javascript
<button onClick={getUsers}>
```
4. Crear la funcion 'postUser' de tipo async-await para enviar datos a una API

5. Indicamos el evento en línea para el segundo botón, con el tipo de evento y la función a ejecutar 
```javascript
<button onClick={postUser}>
```