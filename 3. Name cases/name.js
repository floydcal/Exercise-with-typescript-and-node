"use strict";
let personName = 'floyd';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)
    .toLowerCase()).join(' ');
console.log(`Hello ${personName}, here is your name in:
    Lowercase: ${lowercase}
    Uppercase: ${uppercase}
    Titlecase: ${titlecase}`);
