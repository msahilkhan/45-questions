var people = [
    { name: "Alice", age: 28, occupation: "Software Engineer" },
    { name: "Bob", age: 35, occupation: "Data Scientist" },
    { name: "Charlie", age: 22, occupation: "Student" },
    { name: "David", age: 45, occupation: "Manager" }
];
for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
    var person = people_1[_i];
    console.log("".concat(person.name, " is ").concat(person.age, " years old and works as a ").concat(person.occupation, "."));
}
