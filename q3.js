// Store the person's name in a variable
var person_name = "John Doe";
// Print the name in lowercase
console.log("Lowercase:", person_name.toLowerCase());
// Print the name in uppercase
console.log("Uppercase:", person_name.toUpperCase());
// Print the name in title case
console.log("Titlecase:", person_name.replace(/\b\w/g, function (c) { return c.toUpperCase(); })); // Convert first letter of each word to uppercases
