

const getBigger = ( n1, n2, n3 ) => {
    let numberBigger = 0
    if(n1 > n2){
        if( n1 > n3){
            numberBigger = n1;
        }else{
            numberBigger = n3;
        }
    }else if( n2 > n3){
        numberBigger = n2;
    }else {
        numberBigger = n3;
    }
    return numberBigger;
}


let mayor = getBigger( 19, 12, 3 );
let text = `the largest of the 3 numbers is ${ mayor }`;

console.log( text );
document.write( text );