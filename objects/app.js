let person = {
    name: 'Eduardo',
    lastName: 'Arreguin',
    age: 28,
    height: 1.74,

}

const describePerson = person => {
    return `${ person.name } ${ person.lastName } is ${ person.age } years old and measures ${ person.height } meters`;
}

console.log( describePerson( person ) );
document.write( describePerson( person ) );