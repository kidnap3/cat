//Ternary Operator to simply the if ... else statement

//using if .. else statement
let nightime=true;
	if (nightime){
		console.log('turn on the light');
	} else {
		console.log('turn off the light');
	}

//using ternary operator using '?' and separated by colon ':'
//start with let

nightime ? console.log('turn on the light') : console.log('turn off the light');

//another example white === <+ etc
let favoritePhrase = '1';

if (favoritePhrase === 'Love that!') {
	console.log('I love that!');
} else {
	console.log("I don\'t love that!");
}

//Ternary operator
favoritePhrase === '1' ? console.log('I love that!') : console.log('I don\'t love that!');
