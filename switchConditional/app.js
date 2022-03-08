
let numberDay = parseInt(prompt('what day number is today?'));
//let numberDay = 1
let day = '';

switch (numberDay) {
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6: 
        day = 'Saturday';
        break;
    case 7: 
        day = 'Sunday';
        break;
    default:
        console.log(' ingrese un dia valido del 1 al 7 ');      
        break; 
}

if (day !== '') console.log( `hoy es ${ day } ` )