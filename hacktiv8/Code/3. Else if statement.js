/*
This is else if statemen to add more condition to our if ... else
*/

let season = 'winter';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
  
//////
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.')
  } else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
  } else if (season === 'summer'){
    console.log('It\'s sunny and warm because it\'s summer!');
  }  
  ///////
  
  else {
  console.log('Invalid season.');
}



//there's other simply way to write else if
/*
ada ; setelah value saat case

switch (<#expression#>) {

  case <#value#>:
    <#code#>
    break;
  case value:
    code
    break;
  case value:
    code
    break;
    
  default:
    break;
}
    
    
    */

let athleteFinalPosition = '4 place';
//switch case start wiht case ended with default

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  case 'fourth place':
      console.log('You get the ore medal!');
    break;
  //remembering using backtick to print season function
  case '4 place':
    console.log(`where we go ${season}`);
    break;
  default:
    console.log('No medal awarded.')
    break;
}