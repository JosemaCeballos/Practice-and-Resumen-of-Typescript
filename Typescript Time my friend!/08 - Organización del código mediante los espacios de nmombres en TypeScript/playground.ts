/* Introducción a los espacios de nombres de TSC
https://learn.microsoft.com/es-es/training/modules/typescript-namespaces-organize-code/media/namespaces.png

En esta imagen, namespace A y namespace B comparten una función denominada functionName. Cualquier intento de acceder a la función sin hacer referencia al espacio de nombres que la contiene produce un error porque las declaraciones de variable están en el espacio den ombres global, mientras que las 2 funciones se encuentran dentro del ámbito de sus espacios de nombres respectivos. Estos espacios se usan para reducir la cantidad de código en el ámbito global, limitando la contaminación del ámbito global, proporcionan un contexto para los nombres, lo que ayuda a reducir los conflictos de nomenclatura, y mejoran la reutilización.
*/

/* Organización del código mediante espacios de nombres de varios archivos:
https://learn.microsoft.com/es-es/training/modules/typescript-namespaces-organize-code/media/multi-file-namespaces.png
*/

/*Consideraciones de diseño: 
1 - Declare sus dependencias.
2 - Proporcionan una mejor reutilización del código.
3 - Ofrecen un aislamiento fuerte.
4 - Ocultan las instrucciones internas de las definiciones de módulo y muestran solo los métodos y parámetros asociados al componente declarado.
5 - Proporcionan una mejor compatibilidad con las herramientas para la unión.
6 - Se recomiendan sobre los espacios de nombres para las aplicaciones Node.js porque los módulos son los predeterminados.
7 - Pueden resolver los problemas de flujo de JavaScript de nivel superior porque se crea una instancia de una referencia a un método o una clase externos solo en la invocación del método.
*/