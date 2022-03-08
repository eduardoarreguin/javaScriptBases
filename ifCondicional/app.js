

let note = prompt( 'enter the score ' );
let text = '';
if ( note >= 60 ){
    text = 'approved';
    if( note >= 80 ) text = 'Very well done';
}else{
    text = 'reproved';
    if ( note < 40 ) text = 'Please study more';
}

console.log( text );
document.write( text );