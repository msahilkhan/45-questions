const numbers: number[] = [1, 2, 3, 4, 5];

// Intentional error: trying to access an index that doesn't exist
// This line will produce an "IndexError: Index out of range" error
console.log(numbers[10]);

// Correcting the error by accessing a valid index
console.log(numbers[2]);