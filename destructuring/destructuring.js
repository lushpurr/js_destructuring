// Array Destructuring

// const names = ["Fred", "Kate", "Cindy", "Ricky", "Keith"];
// // const fred = names[0];
// // const kate = names[1]

// const [fred, kate, ...remainingNames] = names;
// console.log(remainingNames);

// Object Destructuring

const person = {
    name: "Joni", 
    age: "76"
}

const { name, age } = person;

console.log(name);
console.log(age);