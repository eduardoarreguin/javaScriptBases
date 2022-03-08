

let table = parseInt( prompt( 'What multiplication table do you want?' ) )
let number = parseInt( prompt( 'Up to what number do you want it?' ) )
for ( let i = 1; i <= number; i++){
        let text = `${ table } X ${ i } = ${ table*i }`;
        console.log( text );
        document.write( text );
}