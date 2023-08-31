// Define a function to create a sandwich summary
function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
      console.log(`- ${item}`);
    }
    console.log("Sandwich is ready!");
  }
  
  // Call the function with different numbers of arguments
  makeSandwich("lettuce", "tomato", "cheese", "ham");
  makeSandwich("turkey", "bacon");
  makeSandwich("peanut butter", "jelly");
  