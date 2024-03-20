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

console.log (`\nDear friends, unfortunately we can only invite 02 of you
at the moment`);

while(friend_name.length>2){
    let remove_guests=friend_name.pop();
    console.log(`Sorry Mr. ${remove_guests}, we regret you are not invited at this moment`);
}

for (let i=0; i<friend_name.length; i++){
    console.log (`Dear ${friend_name[i]}, you are still invited for dinner tomorrow`);
}

friend_name.splice(0,2);
console.log(friend_name);
