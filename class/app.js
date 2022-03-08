class Car {
    constructor( brand, type, doors ){
        this.brand     = brand;
        this.type      = type;
        this.doors     = doors;
        this.create    = 'today';
        this.on        = false;
        this.gasoline  = 100;
    }

    turnOn(){

        if ( this.on === true ) console.error('The car was already on');
        else{
            this.on = true;
            console.log( 'The car turned on' );
        }
    }

    turnOf(){
        this.on = false;
        console.log( 'The car turned off' );
    }

    travel( amount ){
        if( !this.on ) return console.log( 'To make a trip you need to start the car' );

        if( this.gasoline < amount ) return console.log( 'You don\'t have enough gasoline for this trip' );

        this.gasoline -= amount
        console.log( `Trip made remains  ${ this.gasoline }% gasoline` );

        
        
           
        
    }
}

let car = new Car( 'Honda', 'Sedan', 3 );

console.log( car );