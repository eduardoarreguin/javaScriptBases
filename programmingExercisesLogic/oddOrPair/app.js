let numbers = [ 1, 6, 8, 4, 2, 14, 7, 10, 3, 5 ];

const showResult = ( number, pairOrOdd ) =>{
    let text = `${ number } is a number ${ pairOrOdd }`;

    console.log( text );
    document.write( text + '</br>' );
}

for ( let i = 0; i < numbers.length ; i++){

    let number = numbers[i];

    if( number % 2 === 0 )  showResult( number, 'Pair' );
    else showResult( number, 'Odd' );
}


