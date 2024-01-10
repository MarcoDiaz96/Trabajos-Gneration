 ### Instalar y configurar Jest
```sh
npm install --save-dev jest
```
En el `package.json`, modificar los scripts de test
```javascript
    "scripts": {
        "test": "jest"
    },
```
Crear carpeta `modules` y dentro crear calculator.js

crear carpeta `test` y dentro el archivo 
`calculator.test.js`

Creamos los metodos y funciones,exportamos e importamos.

Ejecutamos jest mediante el comando:
`npm test` 