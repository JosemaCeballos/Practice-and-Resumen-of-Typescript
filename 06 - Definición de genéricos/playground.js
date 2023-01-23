var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Los generos son los denominados como tipo any, estos pueden ser cualquier tipo de variable (string, number, array, etc).Son plantillas de código que peude definir y reutilizar en todo el código base. Porporcionan una manera de indicar a las funciones, clases o interfaces qué tipo quiere usar al llamarlas.
function getArra(items) {
    return new Array().concat(items);
}
var numberArra = getArra([5, 10, 15, 20]);
var stringArra = getArra(['Cats', 'Dogs', 'Birds']);
numberArra.push(25); // OK
stringArra.push('Rabbits'); // OK
numberArra.push('This is not a number'); // OK
stringArra.push(30); // OK
console.log(numberArra); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArra); // ["Cats", "Dogs", "Birds", "Rabbits", 30]
//¿Qué ocurre si quiere especificar el tipo de los valores que contendrá la matriz cuando llame a la función? ¿Y si quiere que TypeScript realice después la comprobación de tipos de los valores que se pasan para asegurarse de que son del tipo especificado?
//Los genéricos definen una o varias variables de tipo entre corchetes angulares (< >) para identificar el tipo o los tipos que se van a pasar al componente. Como verá, las variables de tipo también se conocen como parámetros de tipo o parámetros genéricos.
function getArray(items) {
    return new Array().concat(items);
}
var numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25); // OK
numberArray.push('This is not a number'); // Generates a compile time type check error
var stringArray = getArray(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits'); // OK
stringArray.push(30); // Generates a compile time type check error
console.log(stringArray);
console.log(numberArray);
function identity(value, message) {
    var result = '';
    var typeValue = typeof value;
    if (typeof value === 'number') { // Is it a number?
        result = value + value; // OK
    }
    else if (typeof value === 'string') { // Is it a string?
        result = value + value; // OK
    }
    console.log("The message is ".concat(message, " and the function returns a ").concat(typeValue, " value of ").concat(result));
    return result;
}
var numberValue = identity(100, 'Hello');
var stringValue = identity('100', 'Hello');
console.log(numberValue); // Returns 200
console.log(stringValue); // Returns 100100
//También se puede restringir un tipo a la propiedad de otro objeto con el extends con el operador keyof que toma un tipo de objeto y genera una unión literal de cadena o de valores nmuméricos de sus claves. Aquí se usa K extends keyof T para garantizar que el parametro clave es del tipo correcto para el tipo asignado a pet
function getPets(pet, key) {
    return pet[key];
}
var pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
var pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };
console.log(getPets(pets1, "fish")); // Returns 6
console.log(getPets(pets2, "3")); // Error
var returnNumbr = {
    value: 25,
    message: 'Hello!'
};
var returnStrng = {
    value: 'Hello!',
    message: 25
};
var processIdentty = /** @class */ (function () {
    function processIdentty(val, msg) {
        this.value = val;
        this.message = msg;
    }
    processIdentty.prototype.process = function () {
        console.log(this.message);
        return this.value;
    };
    return processIdentty;
}());
var processor = new processIdentty(100, 'Hello');
processor.process(); // Displays 'Hello'
processor.message = 'Hi'; // Display 'Hi'
processor.value = '100'; // Type check error
processor.process();
//También se puede definir una clase genérica de la manera siguiente:
var processIdntity = /** @class */ (function () {
    function processIdntity(value, message) {
        this._value = value;
        this._message = message;
    }
    processIdntity.prototype.getIdentity = function () {
        console.log(this._message);
        return this._value;
    };
    return processIdntity;
}());
var procesor = new processIdntity(100, 'Hello');
procesor.getIdentity(); // Displays 'Hello'
//Implementación de genéricos con tipos y clases personalizados:
var Car = /** @class */ (function () {
    function Car() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
    return Car;
}());
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.make = 'Electric Car';
        _this.doors = 4;
        return _this;
    }
    return ElectricCar;
}(Car));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.make = 'Truck';
        _this.doors = 2;
        return _this;
    }
    return Truck;
}(Car));
function accelerate(car) {
    console.log("All ".concat(car.doors, " doors are closed."));
    console.log("The ".concat(car.make, " is now accelerating!"));
    return car;
}
var myElectricCar = new ElectricCar;
accelerate(myElectricCar);
var myTruck = new Truck;
accelerate(myTruck);
