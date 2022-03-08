
let score = prompt('enter the score ')
let note = '';

if ( score >= 90 ) note = 'A';
else if( score >= 80 ) note = 'B';
else if ( score >= 70 ) note = 'C';
else if ( score >= 60 ) note = 'D';
else note = 'F'; 

text = `${ score } es igual a ${ note } `;

console.log( text );
document.write( text );