

console.log('Celsius to Fahrenheit converter');

const celcius = prompt('insert degrees celcius')
const farengei = ( celcius - 32 ) * ( 5/9 );

let text = ` ${ celcius } degrees celcius is equal to ${ farengei } farengei ` 
console.log( text );
document.write( text );