var animals = ["Dog", "Cat", "Rabbit"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
console.log("\n");
for (var i = 0; i < animals.length; i++) {
    console.log("A ".concat(animals[i].toLowerCase(), " would make a great pet."));
}
console.log("\nAny of these animals would make a great pet!");
