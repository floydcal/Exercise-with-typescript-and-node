
let current_users: string[] = ["Floyd", "Waqas", "Shumail", "John", "Alice"];

let new_users: string[] = ["JOHN", "Bob", "Alice", "Sarah", "David"];

for (let new_username of new_users) {

    if (current_users.some(username => username.toLowerCase() === new_username.toLowerCase())) {
        console.log(`The username "${new_username}" is not available. Please enter a new username.`);
    } else {
        console.log(`The username "${new_username}" is available.`);
    }
}