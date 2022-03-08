
const qualify = ( qualification ) =>{
    let note = '';
    let text = ''
    if ( qualification >= 90 ) note = 'A';
        else if( qualification >= 80 ) note = 'B';
        else if ( qualification >= 70 ) note = 'C';
        else if ( qualification >= 60 ) note = 'D';
        else note = 'F'; 

    text = `${ qualification } is equal to ${ note } `;

    console.log( text );
    document.write( text );
}

qualify( 100 );
qualify( 80 );
qualify( 59 );