function describe_city(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function with different cities
describe_city("New York");
describe_city("Karachi", "Pakistan");
describe_city("London", "United Kingdom");
