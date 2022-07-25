//this is Truthy and falsy Assignment

let tool = '';

/*
this is the long circuit evaluation to assign
let username = '';
let defaultName;

if (username) {
defaultName = username;
} else {
defaultName = 'Stranger';
}

console.log(defaultName); // Prints: Stranger
*/

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

// ingat II or sifat dia ngecek the left-hand condition first
// so, if writingUtensil = false the value will be string pen
//Truthy and falsy


console.log(`The ${writingUtensil} is mightier than the sword.`);

