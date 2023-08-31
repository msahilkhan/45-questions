const placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];

console.log("Original order:", placesToVisit);
console.log("Alphabetical order:", [...placesToVisit].sort());
console.log("Original order:", placesToVisit);
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
console.log("Original order:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Original order:", placesToVisit);
placesToVisit.sort();
console.log("Alphabetical order:", placesToVisit);
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Reverse alphabetical order:", placesToVisit);
