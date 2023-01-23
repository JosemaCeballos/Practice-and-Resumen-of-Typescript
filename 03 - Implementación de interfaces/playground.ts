//Interfaz:
//Las interfaces en TSC cumplen la función de nombrar tipos, y constituyen una manera eficaz de definir un contrato del código, así como contratos con el código fuera del proyecto. Estas se pueden usar para describir un objeto, asignar a los tipos del objeto y parametrizarlos y componer tipos de objetos con nombre existentes en otros nuevos.
interface Employee {
    firstName: string;
    lastName: string;
    fullName(): string;
}
let employee: Employee = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}

//Diferencia entre una interfaz y una de alias de tipo:
//Una interfaz se puede expresar como una de alias de tipo mediante la palabra clave type:
type NewEmployee = {
    firstName: string;
    lastName: string;
    fullName(): string;
}
//Un alias de tpo es una definición de un tipo de datos, por ejemplo, unión, primitivo, intersección, tupla, o cualquier otro tipo. Pero las interfaces, son una manera de describir formas de datos, por ejemplo, un objeto. Las alias de tipo pueden actuar como interfaces, pero hay algunas diferencias sutiles, la principal diferencia es que no se puede volver a abrir para agregar nuevas propiedades, mientras que una interfaz siempre es extensible.

/*
Declaraciónm de tipo:
-Obligatorio: Todas las propiedades son necesarias, a menos que se especifique lo contrario
Ejemplo: firstname: string;

-Opcional: Agregue un signo de interrogación al final del nombre de la propiedad. Úselo para las propiedades que no son obligatorias. Esto impide que el sistema de tipos genere un error si se omite la propiedad.
Ejemplo: fistname?:string;

-Solo Lectura: Agregue la palabra clave readonly delante del nombre de la propiedad. Úselo para las propiedades que solo deben modificarse cuando se crea un objeto por primera vez.
Ejemplo: readonly firstname: string;
*/
interface IceCream {
    flavor: string;
    scoops: number;
    //instructions?: string; //opcional
}
let myIceCream: IceCream = {
    flavor: 'vanilla',
    scoops: 2,
}
console.log(myIceCream.flavor);

function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
}
 
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));


// Extension de una Interface
// Las interfaces se pueden extender entre sí. Esto le permite copair los miembros de una interfaz en otra, lo que ofrece más flexibilidad a la hora de separar las interfaces en componentes reutilizables. Al extenderla se aplican las siguientes reglas
/* 
1-Debe implementar todas las propiedades obligatorias de todas las interfaces
2-Dos interfaces pueden tener la misma propiedad si esta tiene exactamente el mismo nombre y el mismo tipo
3-Si dos interfaces tienen una propiedad con el mismo nombre, pero tipos diferentes, debe declarar una nueva propeidad de modo que la propiedad resultante sea un subtipo de ambas interfaces */
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry'; //tipo literal
    nuts?: boolean; 
    whippedCream?: boolean;
    instructions?: boolean;
}
let myIceCreams: Sundae = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}
function tooManyScoop(dessert: Sundae) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    } else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoop({flavor: 'vanilla', scoops: 5, sauce: 'caramel'}));


//Otras maneras de usar interfaces en TSC
interface IceCreamArray {
    [index: number]: string;
}
let myIceCreamm: IceCreamArray;
myIceCreamm = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];
console.log(myStr);

//Descripción de una API de Javascript mediante una interfaz:
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}
showPost();