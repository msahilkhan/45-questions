// Define a function to create a car object
function createCar(manufacturer: string, model: string, ...options: string[]): object {
    let car: any = {
      manufacturer: manufacturer,
      model: model
    };
  
    // Loop through the options and add them to the car object
    for (let option of options) {
      const [key, value] = option.split(":");
      car[key] = value;
    }
  
    return car;
  }
  
  // Call the function to create a car object with options
  const carInfo = createCar("Toyota", "Camry", "color:red", "year:2022", "sunroof:true");
  
  // Print the car object
  console.log(carInfo);
  