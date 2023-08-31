// Store the person's name in a variable
let person_name = "John Doe";

// Print the name in lowercase
console.log("Lowercase:", person_name.toLowerCase());

// Print the name in uppercase
console.log("Uppercase:", person_name.toUpperCase());

// Print the name in title case
console.log("Titlecase:", person_name.replace(/\b\w/g, c => c.toUpperCase())); // Convert first letter of each word to uppercases