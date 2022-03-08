let names = [ 'Eduardo', 'Rene', 'Juan Diego', 'Dani', 'Alexis' ];

document.write('Nombres: <br/> \n');

const longer = names => {
    let name = '';
    let longName = ''
    for( let i = 0; i < names.length; i++){ 

        name = names[i];
        
        document.write( `- ${ name }  <br/>`);

        if ( name.length  > longName.length ){
            longName = name
        }
    }

    return longName;
}


let longName = longer(names);

let text = `The longest name is ${ longName }`;

console.log( text );
document.write( '<br/>' + text );