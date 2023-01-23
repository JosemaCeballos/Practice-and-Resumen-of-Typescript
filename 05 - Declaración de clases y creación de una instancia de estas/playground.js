//Puede crear clases para modelar datos, encapsular funcionalidades o proporcionar plantillas, entre otras muchas opciones. Por lo tanto, los componentes enumerados anteriormente no son necesarios en cada clase que se cree. Puede que solo necesite métodos y un constructor para un objeto de utilidad, o únicamente propiedades para administrar los datos.
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
var Car = /** @class */ (function () {
    // Constructor
    function Car(make, color, doors) {
        if (doors === void 0) { doors = 4; }
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Increments the value of the static property
    }
    Object.defineProperty(Car.prototype, "make", {
        // Accessors
        get: function () {
            return this._make;
        },
        set: function (make) {
            this._make = make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "color", {
        get: function () {
            return 'The color of the car is ' + this._color;
        },
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "doors", {
        get: function () {
            return this._doors;
        },
        set: function (doors) {
            if ((doors % 2) === 0) {
                this._doors = doors;
            }
            else {
                throw new Error('Doors must be an even number');
            }
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    Car.prototype.accelerate = function (speed) {
        return "".concat(this.worker(), " is accelerating to ").concat(speed, " MPH.");
    };
    Car.prototype.brake = function () {
        return "".concat(this.worker(), " is braking with the standard braking system.");
    };
    Car.prototype.turn = function (direction) {
        return "".concat(this.worker(), " is turning ").concat(direction);
    };
    // This function performs work for the other method functions
    Car.prototype.worker = function () {
        return this._make;
    };
    Car.getNumberOfCars = function () {
        return Car.numberOfCars;
    };
    // Properties
    Car.numberOfCars = 0; // New static property
    return Car;
}());
//Creación de instancias de una clase
var myCar1 = new Car('Cool Car Company', 'blue', 2);
console.log(myCar1.color);
console.log(myCar1._color);
var myCar2 = new Car('Galaxy Motors', 'red', 3);
var myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors); // returns 4, the default value
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));
//Modificadores de Acceso:
//1- Public: Si no especifica un modificador de acceso, el valor predeterminado es público. También puede establecer explícitamente el miembro en público mediante la palabra clave public.
//2- Private: Si modifica el miembro con la palabra clave private, no se peude tener acceso a el fuera de la clase contenedora
//3- Protected: El modificador protected actúa de forma muy similar al modificador private, con la expeción de que también se puede tener acceso a los miembros declarados protected dentro de las clases derivadas.
//myCar1.
//Definición de propiedades estáticas:
//Las propiedades y metodos de las clases son propiedades de instancia, esto significa que se crea una instancia de ellos y se llama en cada instancia del objeto de la clase. Existen otros tipos de propiedades, y estás son las estáticas, y para convertir una propiedad en estática se agrega la palabra static.
console.log(Car.getNumberOfCars());
//Herencia - Extensión de una clase
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    // Constructor
    function ElectricCar(make, color, range, doors) {
        if (doors === void 0) { doors = 2; }
        var _this = _super.call(this, make, color, doors) || this;
        _this._range = range;
        return _this;
    }
    Object.defineProperty(ElectricCar.prototype, "range", {
        // Accessors
        get: function () {
            return this._range;
        },
        set: function (range) {
            this._range = range;
        },
        enumerable: false,
        configurable: true
    });
    // Methods
    ElectricCar.prototype.charge = function () {
        console.log(this.worker() + " is charging.");
    };
    ElectricCar.prototype.brake = function () {
        return "".concat(this.worker(), "  is braking with the regenerative braking system.");
    };
    return ElectricCar;
}(Car));
var spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
var eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"
