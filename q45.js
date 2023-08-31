// Define a function to create a car object
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Loop through the options and add them to the car object
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        var _b = option.split(":"), key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
// Call the function to create a car object with options
var carInfo = createCar("Toyota", "Camry", "color:red", "year:2022", "sunroof:true");
// Print the car object
console.log(carInfo);
