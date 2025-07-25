type Person = {
    firstName: string;
    lastName: string;
}

function printName(person: Person): void {
    console.log(`${person.firstName} ${person.lastName}`);
}
let myvar: Person = {firstName:"abc",lastName:"def"};
printName(myvar);


type MidiBlock = {
    buffer: Buffer,
}

//tuple time
type t = [string,number];

let var2: t = ["abc",123];

// enums!

enum OrderStatus {
    SHIPPED,
    DELIVERED
}

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED
}

// interfaces / classes!


interface Colourful {
    colour: string
}

interface Printable {
    print(): void
}

class Thing implements Colourful, Printable {
    constructor(public colour: string) {}
    public print(): void {
        console.log("Hello!");
    }
}

abstract class Employee {
    constructor(public firstName: string, public lastName: string) {}
    abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }
    public getPay(): number {
        return this.salary;
    }
}

const bob: Employee = new FullTimeEmployee("bob", "bob", 1234);