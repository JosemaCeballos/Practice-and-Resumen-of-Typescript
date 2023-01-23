//Los generos son los denominados como tipo any, estos pueden ser cualquier tipo de variable (string, number, array, etc).Son plantillas de código que puede definir y reutilizar en todo el código base. Porporcionan una manera de indicar a las funciones, clases o interfaces qué tipo quiere usar al llamarlas.
function getArra(items : any[]) : any[] {
    return new Array().concat(items);
}
let numberArra = getArra([5, 10, 15, 20]);
let stringArra = getArra(['Cats', 'Dogs', 'Birds']);
numberArra.push(25);                       // OK
stringArra.push('Rabbits');                // OK
numberArra.push('This is not a number');   // OK
stringArra.push(30);                       // OK
console.log(numberArra);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArra);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]

//¿Qué ocurre si quiere especificar el tipo de los valores que contendrá la matriz cuando llame a la función? ¿Y si quiere que TypeScript realice después la comprobación de tipos de los valores que se pasan para asegurarse de que son del tipo especificado?
//Los genéricos definen una o varias variables de tipo entre corchetes angulares (< >) para identificar el tipo o los tipos que se van a pasar al componente. Como verá, las variables de tipo también se conocen como parámetros de tipo o parámetros genéricos.
function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}
let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                      // OK
numberArray.push('This is not a number');  // Generates a compile time type check error
let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');               // OK
stringArray.push(30);                      // Generates a compile time type check error
console.log(stringArray)
console.log(numberArray);

//Dato: Se puede usar más de una variable de tipo, por ejemplo, se nos puede dar la siguiente sigueación:
type ValidTypes = string | number;
function identity<T extends ValidTypes, U> (value: T, message: U) {   // Return type is inferred
    let result: ValidTypes = '';
    let typeValue: string = typeof value;
    if (typeof value === 'number') {           // Is it a number?
        result = value + value;                // OK
    } else if (typeof value === 'string') {    // Is it a string?
        result = value + value;                // OK
    }
    console.log(`The message is ${message} and the function returns a ${typeValue} value of ${result}`);
    return result
}
let numberValue = identity<number, string>(100, 'Hello');
let stringValue = identity<string, string>('100', 'Hello');
console.log(numberValue);       // Returns 200
console.log(stringValue);       // Returns 100100

//También se puede restringir un tipo a la propiedad de otro objeto con el extends con el operador keyof que toma un tipo de objeto y genera una unión literal de cadena o de valores nmuméricos de sus claves. Aquí se usa K extends keyof T para garantizar que el parametro clave es del tipo correcto para el tipo asignado a pet
function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
}
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}
console.log(getPets(pets1, "fish"));  // Returns 6
console.log(getPets(pets2, "3"));     // Error

//Interfaces con genericos:
interface Identty<T, U> {
    value: T;
    message: U;
}
let returnNumbr: Identty<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnStrng: Identty<string, number> = {
    value: 'Hello!',
    message: 25
}

interface ProcessIdentity<T, U> {
    value: T;
    message: U;
    process(): T;
}
class processIdentty<X, Y> implements ProcessIdentity<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}
let processor = new processIdentty<number, string>(100, 'Hello');
processor.process();           // Displays 'Hello'
processor.message = 'Hi';      // Display 'Hi'
processor.value = '100';       // Type check error
processor.process();

//También se puede definir una clase genérica de la manera siguiente:
class processIdntity<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let procesor = new processIdntity<number, string>(100, 'Hello');
procesor.getIdentity();      // Displays 'Hello'


//Implementación de genéricos con tipos y clases personalizados:
class Car {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCar extends Car {
    make = 'Electric Car';
    doors = 4
}
class Truck extends Car {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Car> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}
let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);

