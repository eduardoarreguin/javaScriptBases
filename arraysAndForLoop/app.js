let people = ['Eduardo', 'Carlos', 'Jonh' ];
let salaries = [ 1000, 1200, 1800];

let text = '';

for ( let i = 0; i < people.length; i++){

    text = `${ people[i] } has a salary of ${ salaries[i] }`
    
    console.log( text );
    document.write( text );
}