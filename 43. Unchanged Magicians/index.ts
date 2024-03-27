// Function to show magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to modify magicians' names
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Original array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call make_great() with a copy of the original array
let great_magicians: string[] = make_great([...magicians]); // Using spread operator to create a copy of the array

// Call the function to show the original list of magicians
console.log("Original magicians:");
show_magicians(magicians);

// Call the function to show the modified list of magicians
console.log("\nGreat magicians:");
show_magicians(great_magicians);