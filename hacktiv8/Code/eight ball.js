
//https://www.codecademy.com/courses/introduction-to-javascript/projects/magic-eight-ball-1


let userName = 'Fajar';
if (userName === 'Jane'){
	console.log('Hello, Jane!');
	
} else {
	console.log('Hello!');	
}

let userQuestion = 'how old are you?';
	console.log(`${userName} question is ${userQuestion}`);

//generate random number 0 - 7
// i need to assign console log value into variable
let randomNumber = '';
//	console.log(Math.floor(Math.random()*8));




//			assign console.log into variable
//let nball ='8';

/* pake function juga gabisa 


function nball(){
	console.log(Math.floor(Math.random()*8));
}
nball();
*/

/*
var num = 5;
var nball = Math.floor((Math.random() * parseInt(num)));

console.log(nball);
*/

let nball = Math.floor((Math.random() * 8));

console.log(nball);

switch (nball) {
	case 0:
		console.log('');
		break;
	case 1:
		console.log('it is certain');
		break;
	case 2:
		console.log('it is decidedly so');
		break;
	case 3:
		console.log('Reply hazy try again');
		break;
	case 4:
		console.log('cannot predict now');
		break;
	case 5:
		console.log('do not count onit');
		break;
	case 6:
		console.log('my sources say no');
		break;
	case 7:
		console.log('outlook not so good');
		break;
	case 8:
		console.log('sign npoint to yes');
		break;
	default:
		console.log('no number match');
		break;
}