let numbers = [ 1, 6, 8, 4, 2, 14, 7, 17, 10, 3, 5 ];

let biggerNumber = 0
for ( let i = 0; i < numbers.length; i++ ){
    if( numbers[i] > biggerNumber ) biggerNumber = numbers[i];
}
console.log(`The bigger number is ${ biggerNumber }`);
