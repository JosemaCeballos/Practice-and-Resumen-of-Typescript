namespace Greetings {
    export function returnGreeting (greeting: string) {
        console.log(`The message from namespace Greetings is ${greeting}.`);
    }
}
namespace GreetingsWithLength {
    export function returnGreeting (greeting: string) {
        let greetingLength = getLength(greeting);
        console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
    }
    function getLength(message: string): number {
        return message.length
    }
}

//returnGreeting('Hello');                     // Returns error
Greetings.returnGreeting('Bonjour');         // OK
GreetingsWithLength.returnGreeting('Hola');  // OK