let names = [ 'Eduardo', 'Ernesto', 'Rene', 'dani', 'Diego', 'omar', 'alberto', 'diana', 'juan' ]

const filterNames = ( names, letter ) =>{
    let namesFilter = []
    for( let i = 0; i < names.length; i++ ){
        let name = names[i];
        if( name[0].toLowerCase() === letter ){
            namesFilter.push( name )
        }
    }

    return namesFilter
}

orderNames = (names) => {
    return names.join(', ');
}

let letter = prompt('Enter the letter to filter');

namesArray = filterNames( names, letter );
let namesText = orderNames( namesArray );

let text = `${ namesArray.length> 1 ? 'The names ' : 'Name'} with the letter '${ letter }' ${ namesArray.length> 1 ? 'are' : 'is' } ${ namesText } `;

console.log( text );
document.write( text );