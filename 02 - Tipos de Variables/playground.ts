let x: number;   //* Explicito porque le menciono el tipo
// x = "hola";

let y = 1;       //* Implicito porque declaro la variable y esta ya es de un tipo
// y = "hola";

let z;           //* Inicializo la variable pero no le asigno nada, ni la ha inicializado. Esto para typescript es "any"
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
let flag: boolean;
let yes = true;
let no = false;

//Tipos numéricos y BigInteger
let a: number;
let b = 0;
let c: number = 123.456;

//Tipo de cadena
let s: string;
let empty = "";
let abc = 'abc';
let firstName: string = "José";
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
console.log(sentence);

//Tipo enum
enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
//Para ver el nombre asociado hacemos lo siguiente:
console.log(ContractStatus[employeeStatus])

//Tipo any
let randommValue: any = 10;
randommValue = 'Mateo';   // OK
randommValue = true;      // OK
console.log(randommValue.name);  // Logs "undefined" to the console
//randommValue();                  // Returns "randomValue is not a function" error
//randommValue.toUpperCase();      // Returns "randomValue is not a function" error

//Tipo unknown
let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';
//console.log(randomValue.name);  // Error: Object is of type unknown
//randomValue();                  // Error: Object is of type unknown
//randomValue.toUpperCase();      // Error: Object is of type unknown

//Aserción de Tipos
let randomnValue: unknown = 10;
randomnValue = true;
randomnValue = 'Mateo';

if (typeof randomnValue === "string") {
    console.log((randomnValue as string).toUpperCase());    //* Returns MATEO to the console.
    //Otra vamera de validarlo sería la siguiente: (<string>randomValue).toUpperCase();
} else {
    console.log("Error - A string was expected here.");    //* Returns an error message.
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
let multiType: number | boolean;
multiType = 20;         //* Valid
multiType = true;       //* Valid

function addd(xx: number | string, yy: number | string) {
    if (typeof xx === 'number' && typeof yy === 'number') {
        return xx + yy;
    }
    if (typeof xx === 'string' && typeof yy === 'string') {
        return xx.concat(yy);
    }
    return 'Parameters must be numbers or strings';
}
console.log(addd('one', 'two'));  //* Returns "onetwo"
console.log(addd(1, 2));          //* Returns 3
console.log(addd('one', 2));      //* Returns error

//Tipos de Intersección:
interface Employee {
    employeeID: number;
    age: number;
  }
  interface Manager {
    stockPlan: boolean;
  }
  type ManagementEmployee = Employee & Manager;
  let newManager: ManagementEmployee = {
      employeeID: 12345,
      age: 34,
      stockPlan: true
};

// Tipos Literales
type testResult = "pass" | "fail" | "incomplete";
let myResult: testResult;
myResult = "incomplete";    //* Valid
myResult = "pass";          //* Valid
myResult = "failure";       //* Invalid

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
diceRoll = 7;    //* Invalid

//Tipos de colección en TypeScript:
let listita: number[] = [1, 2, 3];
let listit: Array<number> = [1, 2, 3];
let person1: [string, number] = ['Marcia', 35];
let person2: [string, number] = ['Marcia', 35, true];
let person3: [string, number] = [35, 'Marcia'];
