let personName: string='floyd';


let lowercase: string=personName.toLowerCase();
let uppercase: string=personName.toUpperCase();
let titlecase: string=personName.split(' '). map(word=>word.charAt(0).toUpperCase()+word.slice(1)
.toLowerCase()).join(' ')

   console.log(`Hello ${personName}, here is your name in:
    Lowercase: ${lowercase}
    Uppercase: ${uppercase}
    Titlecase: ${titlecase}`);
    
