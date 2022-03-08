let x = 10;
let y = 10;

for ( i = 1; i <= x; i ++  ){
    let reglon = '';
    for ( j = 1; j <= y; j ++  ){
        reglon += `${ j * i }     `;
    } 
    console.log( reglon );
    document.write( reglon + '<br />' );
}
