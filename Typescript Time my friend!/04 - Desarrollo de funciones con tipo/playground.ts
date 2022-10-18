//Funciones con nombre 
//Estas son una declaración de función escrita con la palabra clave function que se proporciona con un nombre distinto en el ambito actual. Estas se cargan en el contexto de ejecución del código.
//La sintaxis para declarar una función con nombre en TSC es la misma que para definir una en JS. La unica diferencia con Typescript, es que puede proporcionar una naotación de tipo para los parametros de la función y el valor devuelto.
//Funciones anonimas
//Estas son las funciones que se le asignan a una variable
//Funciones flecha

//Parametros de REST
//Si se desea trabajar con varios parámetros como grupo o no sabe cuántos parámetros tomará una función en una ultima instancia, puede usar los parametros REST. Los parámetros de REST se trata como un número sin limite de parametros opcionales. Puede dejarlos desactivados o tener tantos como desee.
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number =  firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++) {
       if(isNaN(restOfNumbers[counter])){
          continue;
       }
       total += Number(restOfNumbers[counter]);
    }
    return total;
}
console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7));  // returns 28
console.log(addAllNumbers(2));                    // returns 2

//Parametros de objeto descontruido: destructuring
interface Message {
    text: string;
    sender: string;
}
function displayMessage({text, sender}: Message) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({sender: 'Christopher', text: 'hello, world'});

//Definición de tipo de funciones
// type calculator = (x: number, y: number) => number;
interface Calculator {
    (x: number, y: number): number;
}
let addNumbers: Calculator = (x: number, y: number): number => x + y;
let subtractNumbers: Calculator = (x: number, y: number): number => x - y;

console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));

let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}
console.log(doCalculation('subtract')(1,2))