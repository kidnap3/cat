
// how to make your own function
function season(){
      console.log(Math.floor(Math.random()*4));
   }
season();


// eight ball codecademy
// output random angka terus valuenya dijadiin buat munculin variable angka tsb
let randomangka = Math.floor(Math.random()*5);
let ball='';

switch (randomangka) {
   case 0:
      ball = 'bola 0';
      break;
   case 1:
      ball ='bola 1';
      break;
   case 2:
      ball ='bola 2';
      break;
   case 3:
      ball = 'bola 3';
      break;
   case 4:
      ball ='bola 4';
   default:
      break;
}
console.log(randomangka);

console.log(ball);
