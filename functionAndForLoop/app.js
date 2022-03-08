


const printTable = ( base, limit ) => {
        for ( let i = 1; i <= limit; i++){
                console.log( `${ base } X ${ i } = ${ base*i }` )
        }
        console.log( `end of table of  ${ base }`)
}

printTable( 10, 10 );