const input = process.argv[2];
const number = Number(input);
 
if(Number.isInteger(number)) {
    console.log(`My number: ${number}`);
} else {
    console.log('Not a number');
} 