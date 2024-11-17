type Combinable = [string, number];

const person: {
    name: string;
    email: string;
    password: string;
    age: number;
    hobbies: string[];
    roles: Combinable,
} = {
    name: 'John',
    email: 'john@example.com',
    password: 'password@example.com',
    age: 10,
    hobbies: ["football, gaming"],
    roles: ["director", 30],
}
for (const hobby of person.hobbies) {
    console.log(hobby);
}
console.log(person.name);

function add(number1: number, number2: number): number {
    return number1 + number2;
}

let combineNumber: (a: number, b: number) => number;

combineNumber = add;
combineNumber(8, 8);