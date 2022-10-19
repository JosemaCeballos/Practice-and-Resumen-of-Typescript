//Organización del código en módulos
//https://learn.microsoft.com/es-es/training/modules/typescript-work-external-libraries/media/modules.png

//Importación de un componente de Módulo
//import { <component name> } from '<module name>'
//import { <component name> as <new name> } from '<module name>'
//Para importar el módulo completo hacemos lo siguiente: import * as <variable name> from '<module name>'


/*Compilación de módulos
1 - Abra el terminal y compile el módulo main.ts para Node.js escribiendo el comando siguiente:
tsc --module commonjs main.ts
2 - El compilador sigue las instrucciones import para compilar todos los archivos dependientes. Tenga en cuenta que, cuando se compila main.ts, cada módulo se convierte en un archivo .js independiente.
3 - Escriba node main para probar el archivo.
*/

/*Ejecución de módulos desde una página web:
1 - Si quiere compilar el archivo TSC para ES6 con el fin de usarlo en un explorador web se escribe lo siguiente: tsc --module es6 main.ts
2 - Para ejecutar un módulo desde una página web, recuerde establecer la opción type en "module":
<script type="module" src=".\main.js"></script>
*/

/*Acceso a bibliotecas de tipos externas
Se accede a ellas mediante el import. Y se las instala de la siguiente manera:
npm install --save-dev @types/<library-name>
*/