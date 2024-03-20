let friend_name: string[]=["Shumail", "Arif", "Floyd"];

let absent_guest: string="Floyd";

let new_guest: string="Waqas";

friend_name[0]=new_guest;

for (let i=0; i<friend_name.length; i++){
    console.log (`Dear ${friend_name[i]}, you are invited for dinner tomorrow`);
}

console.log(`${absent_guest} will not be attending dinner tomorrow`);
