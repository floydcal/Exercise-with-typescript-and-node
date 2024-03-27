// Function to summarize sandwich order
function make_sandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich. Please add some items!");
    } else {
        console.log("You ordered a sandwich with the following items:");
        for (let item of items) {
            console.log(`- ${item}`);
        }
    }
    console.log(); // Empty line for clarity
}

// Call the function three times with different number of arguments
make_sandwich("Beef", "Cheese", "Lettuce", "Tomato");
make_sandwich("Turkey", "Swiss Cheese", "Mayonnaise");
make_sandwich("Peanut Butter", "Jelly");