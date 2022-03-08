
let pounds = parseFloat( prompt('Type your weight in pounds'))

//let kilograms = pounds * 0.453592;
let kilograms = pounds  / 2.2046 
kilograms *= 100
kilograms = Math.round( kilograms );
kilograms /= 100;

console.log( `Your weight is  ${ kilograms } kilograms`)