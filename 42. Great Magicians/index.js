function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    let great_magicians = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}
let magicians = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
let great_magicians = make_great(magicians);
show_magicians(great_magicians);
export {};
