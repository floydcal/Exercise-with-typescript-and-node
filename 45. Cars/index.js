// Function to store information about a car in an object
function car_info(manufacturer, model, ...extras) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    for (let extra of extras) {
        car[extra[0]] = extra[1];
    }
    return car;
}
// Call the function with required information and additional name-value pairs
let myCar = car_info("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
// Print the object to ensure all information was stored correctly
console.log(myCar);
export {};
