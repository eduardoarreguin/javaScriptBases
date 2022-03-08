

let gasoline = parseInt( prompt( 'Enter the percentage of gasoline' ) );

while(gasoline > 0) {
        let text = `Remaining gasoline ${ gasoline }`
        console.log( text );
        document.write( text );
        gasoline--;    
}

console.log( 'No longer has gasoline' );