// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let friend_name: string[]=["Shumail", "Arif", "Floyd"];

let absent_guest: string="Floyd";

let new_guest: string="Waqas";

console.log(`${absent_guest} will not be attending dinner tomorrow`);
console.log(`Hurray!! we have found a bigger table and therefore we are inviting 3 more guests!`);

friend_name[0]=new_guest;

friend_name.unshift("Sheraz");
friend_name.splice(2, 0, "Junaid");
friend_name.push("Dilshad");

for (let i=0; i<friend_name.length; i++){
    console.log (`Dear ${friend_name[i]}, you are invited for dinner tomorrow`);
}
