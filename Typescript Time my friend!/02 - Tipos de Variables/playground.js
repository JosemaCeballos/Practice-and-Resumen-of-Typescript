var x; //* Explicito porque le menciono el tipo
// x = "hola";
var y = 1; //* Implicito porque declaro la variable y esta ya es de un tipo
// y = "hola";
var z; //* Inicializo la variable pero no le asigno nada, ni la ha inicializado. Esto para typescript es "any"
// z = "hola";
// z = 1;
/*Tipos Primitivos:
    -Boolean
    -Number
    -String
    -enum
    -Void
    -Null
    -Undefined */
/*Tipos de objeto:
    -Clase
    -Interfaz
    -Matriz
    -Literales */
//Tipo Parámetros
//Tipo Booleano
var flag;
var yes = true;
var no = false;
//Tipos numéricos y BigInteger
var a;
var b = 0;
var c = 123.456;
//Tipo de cadena
var s;
var empty = "";
var abc = 'abc';
var firstName = "José";
var sentence = "My name is ".concat(firstName, ".\n    I am new to TypeScript.");
console.log(sentence);
//Tipo enum
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 1] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 2] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 3] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
//Para ver el nombre asociado hacemos lo siguiente:
console.log(ContractStatus[employeeStatus]);
//Tipo any
var randommValue = 10;
randommValue = 'Mateo'; // OK
randommValue = true; // OK
console.log(randommValue.name); // Logs "undefined" to the console
//randommValue();                  // Returns "randomValue is not a function" error
//randommValue.toUpperCase();      // Returns "randomValue is not a function" error
//Tipo unknown
var randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
//console.log(randomValue.name);  // Error: Object is of type unknown
//randomValue();                  // Error: Object is of type unknown
//randomValue.toUpperCase();      // Error: Object is of type unknown
//Aserción de Tipos
var randomnValue = 10;
randomnValue = true;
randomnValue = 'Mateo';
if (typeof randomnValue === "string") {
    console.log(randomnValue.toUpperCase()); //* Returns MATEO to the console.
    //Otra vamera de validarlo sería la siguiente: (<string>randomValue).toUpperCase();
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
/* Restricción de Tipos:
Tipo	            Predicate
string	            typeof s === "string"
number	            typeof n === "number"
boolean	            typeof b === "boolean"
undefined	        typeof undefined === "undefined"
function	        typeof f === "function"
array	            Array.isArray(a) */
//Tipos de Unión:
var multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
function addd(xx, yy) {
    if (typeof xx === 'number' && typeof yy === 'number') {
        return xx + yy;
    }
    if (typeof xx === 'string' && typeof yy === 'string') {
        return xx.concat(yy);
    }
    return 'Parameters must be numbers or strings';
}
console.log(addd('one', 'two')); //* Returns "onetwo"
console.log(addd(1, 2)); //* Returns 3
console.log(addd('one', 2)); //* Returns error
var newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
var myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
myResult = "failure"; //* Invalid
var diceRoll;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
diceRoll = 7; //* Invalid
//Tipos de colección en TypeScript:
var listita = [1, 2, 3];
var listit = [1, 2, 3];
