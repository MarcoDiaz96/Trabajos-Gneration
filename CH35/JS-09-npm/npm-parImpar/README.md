#Crear y publicar un nuevo paquete de npm

##Creacion del package

1. Inicializar npm desde CLI
´´´´
    sh
npm init
´´´´

Me guiara a traves de una serie de pasos donde me solicite información relacionada con el package, como el nombre(nombre unico),la version,la descripción, el punto de netrada (index.js),comando prueba,repositorio de git en donde vive, palabras clave para coincidir con busquedas,autor

2. presionar enter para afirmar que la información es correcta y generar el archivo package.json

-- package.json
    *Contiene información sobre el proyecto modulo que vamos a crear.Son un estandar de nodejs para facilitar estructura y ejecución dentro del entorno de ejecución y de esta manera poder compartirlo a traves del sitio de npmjs.com
    La informacion se estructura como objeto de Js con notación JSON

3. Crear una carpeta llamada 'modules' en donde vivirá nuestro script
4. Dentro de modules crear el script (.js) con el nombre 'paimpar.js'
5. Crear la funcion del script y exportarlo con 'export default'
6. Importar el script desde el archivo `index.js` con `import + function + from + ruta con extensión` e invocamos la función con parámetros.
    ```javascript
    import determinarParImpar from "./modules/parimpar.js";
    ```
7. Configurar el "type" :"module" en el archivo package.json

8.ejecutamos el programa desde el ebtorno de nodejs con el comando 
´´´´
    sh
    node index.js
    ´´´´
    ## Publicar package en npm 
    1. iniciar sedion de npm pero ahora desde CLI con el comando
    ´´´´
        sh
    npm login
    ´´´´
    2. Esperamos que cargue y presionamos enter para abrir el navegador
3. Recibiremos un correo con un password de una sola vez, lo agregamos y presionamos Login
4. Regresamos a la terminal y nos mostrará el mensaje `logged in on npmjs.org`

5. Publicar el package con acceso publico desde CLI a npm con el comando
´´´´
    sh
npm publish --access=public
´´´´
