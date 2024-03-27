// Define the list of animals
let animals = ["dog", "cat", "rabbit"];
// Print out the name of each animal using a for loop
for (let animal of animals) {
    console.log(animal);
}
// Print a statement about each animal
for (let animal of animals) {
    switch (animal) {
        case "dog":
            console.log("A dog is loyal and protective.");
            break;
        case "cat":
            console.log("A cat makes a great companion.");
            break;
        case "rabbit":
            console.log("A rabbit is a cute and low-maintenance pet.");
            break;
        default:
            console.log("This animal is not recognized.");
    }
}
// Print what these animals have in common
console.log("Any of these animals would make a great pet!");
export {};
