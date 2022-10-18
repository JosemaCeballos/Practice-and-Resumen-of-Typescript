//Funciones con nombre 
//Estas son una declaración de función escrita con la palabra clave function que se proporciona con un nombre distinto en el ambito actual. Estas se cargan en el contexto de ejecución del código.
//La sintaxis para declarar una función con nombre en TSC es la misma que para definir una en JS. La unica diferencia con Typescript, es que puede proporcionar una naotación de tipo para los parametros de la función y el valor devuelto.
//Funciones anonimas
//Estas son las funciones que se le asignan a una variable, de manera tal que quede de la siguiente manera:
//Funciones flecha
//Parametros de REST
//Si se desea trabajar con varios parámetros como grupo o no sabe cuántos parámetros tomará una función en una ultima instancia, puede usar los parametros REST. Los parámetros de REST se trata como un número sin limite de parametros opcionales. Puede dejarlos desactivados o tener tantos como desee.
var addAllNumbers = function (firstNumber) {
    var restOfNumbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNumbers[_i - 1] = arguments[_i];
    }
    var total = firstNumber;
    for (var counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
console.log(addAllNumbers(1, 2, 3, 4, 5, 6, 7)); // returns 28
console.log(addAllNumbers(2)); // returns 2
function displayMessage(_a) {
    var text = _a.text, sender = _a.sender;
    console.log("Message from ".concat(sender, ": ").concat(text));
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
var addNumbers = function (x, y) { return x + y; };
var subtractNumbers = function (x, y) { return x - y; };
console.log(addNumbers(1, 2));
console.log(subtractNumbers(1, 2));
var doCalculation = function (operation) {
    if (operation === 'add') {
        return addNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation('subtract')(1, 2));
