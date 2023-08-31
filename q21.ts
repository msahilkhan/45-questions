const people: { name: string, age: number, occupation: string }[] = [
    { name: "Alice", age: 28, occupation: "Software Engineer" },
    { name: "Bob", age: 35, occupation: "Data Scientist" },
    { name: "Charlie", age: 22, occupation: "Student" },
    { name: "David", age: 45, occupation: "Manager" }
];

for (const person of people) {
    console.log(`${person.name} is ${person.age} years old and works as a ${person.occupation}.`);
}
