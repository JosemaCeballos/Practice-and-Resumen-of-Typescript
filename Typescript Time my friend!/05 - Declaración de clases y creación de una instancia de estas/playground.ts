//Puede crear clases para modelar datos, encapsular funcionalidades o proporcionar plantillas, entre otras muchas opciones. Por lo tanto, los componentes enumerados anteriormente no son necesarios en cada clase que se cree. Puede que solo necesite métodos y un constructor para un objeto de utilidad, o únicamente propiedades para administrar los datos.

class Car implements Vehicle{
    // Properties
    private static numberOfCars: number = 0;    // New static property
    _make: string;
    _color: string;
    _doors: number;
    // Constructor
    constructor(make: string, color: string, doors = 4) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        Car.numberOfCars++; // Increments the value of the static property
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        if ((doors % 2) === 0) {
            this._doors = doors;
        } else {
            throw new Error('Doors must be an even number');
        }
    }
    // Methods
    accelerate(speed: number): string {
        return `${this.worker()} is accelerating to ${speed} MPH.`
    }
    brake(): string {
        return `${this.worker()} is braking with the standard braking system.`
    }
    turn(direction: 'left' | 'right'): string {
        return `${this.worker()} is turning ${direction}`;
    }
    // This function performs work for the other method functions
    worker(): string {
        return this._make;
    }
    public static getNumberOfCars(): number {
        return Car.numberOfCars
    }
}

//Creación de instancias de una clase
let myCar1 = new Car('Cool Car Company', 'blue', 2); 
console.log(myCar1.color);
console.log(myCar1._color)

let myCar2 = new Car('Galaxy Motors', 'red', 3);
let myCar3 = new Car('Galaxy Motors', 'gray');
console.log(myCar3.doors);  // returns 4, the default value

console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn('right'));


//Modificadores de Acceso:
//1- Public: Si no especifica un modificador de acceso, el valor predeterminado es público. También puede establecer explícitamente el miembro en público mediante la palabra clave public.
//2- Private: Si modifica el miembro con la palabra clave private, no se puede tener acceso a el fuera de la clase contenedora
//3- Protected: El modificador protected actúa de forma muy similar al modificador private, con la expeción de que también se puede tener acceso a los miembros declarados protected dentro de las clases derivadas.
//myCar1.

//Definición de propiedades estáticas:
//Las propiedades y metodos de las clases son propiedades de instancia, esto significa que se crea una instancia de ellos y se llama en cada instancia del objeto de la clase. Existen otros tipos de propiedades, y estás son las estáticas, y para convertir una propiedad en estática se agrega la palabra static.
console.log(Car.getNumberOfCars());


//Herencia - Extensión de una clase
class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range: number;
    // Constructor
    constructor(make: string, color: string, range: number, doors = 2) {
        super(make, color, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(this.worker() + " is charging.")
    }
    brake(): string {
        return `${this.worker()}  is braking with the regenerative braking system.`
    }
}

let spark = new ElectricCar('Spark Motors','silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263);
console.log(eCar.doors);         // returns the default, 2
spark.charge();                  // returns "Spark Motors is charging"
console.log(spark.brake());  // returns "Spark Motors is braking with the regenerative braking system"


//Declaración de una interfaz para asegurar la forma de la clase
interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}


//Cuándo usar interfaces:
interface Dog {
    id?: number;
    name: string;
    age: number;
    description: string;
}

//Diferencia entre interfaces y clases
//Las clases permiten definir los detalles de implementación, y las interfaces definen únicamente cómo se estructuran los datos. Las clases permiten definir MediaStreamAudioDestinationNode, campos y propeidades, y proporcionar una forma de crear plantillas de objetos definiendo valores predeterminados.
class DogRecord implements Dog {
    id: number;
    name: string;
    age: number;
    description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.description = description;
    }
    static load(id: number): void {
        // code to load dog from database
        console.log(id + " " + this.name)
    }
    save() {
        this.id++;
    }
}