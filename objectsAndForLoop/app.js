let person1 = {
    name: 'eduardo',
    age: 28
}

let person2 = {
    name: 'rene',
    age: 29
}

let person3 = {
    name: 'Gerardo',
    age: 30
}

let persons = [ person1, person2, person3 ];

let text = '';

 for ( let i = 0; i < persons.length; i++ ) {
     text =`${ persons[i].name } is ${ persons[i].age } years old`;

     console.log( text );
     document.write( text );
 }