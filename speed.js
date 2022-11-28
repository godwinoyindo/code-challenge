
/*Speed Detector Challenge*/
console.log('ENTER SPEED OF THE CAR');
generateDemeritPoint();

function generateDemeritPoint(){
    //Get speed prompt
    
    let speed = prompt('Enter speed of the car: ');

    //Generate demerit points
    switch(speed){
        case (speed < 70):
            console.log('Ok');
            break;
        case (speed = 75):
            console.log('Demerit point is 1');
            break;
        case (speed = 80):
            console.log('Demerit point is 2');
            break;
        case (speed = 85):
            console.log('Demerit point is 3');
            break;
        case (speed = 90):
            console.log('Demerit point is 4');
            break;
        case (speed = 95):
            console.log('Demerit point is 5');
            break;
        case (speed = 100):
            console.log('Demerit point is 6');
            break;
        case (speed = 105):
            console.log('Demerit point is 7');
            break;
        case (speed = 110):
            console.log('Demerit point is 8');
            break;
        case (speed = 115):
            console.log('Demerit point is 9');
            break;
        case (speed = 120):
            console.log('Demerit point is 10');
            break;
        case (speed = 125):
            console.log('Demerit point is 11');
            break;
        case (speed = 130):
            console.log('Demerit point is 12');
            break;
        case (speed > 130):
            console.log('Demerit point is more than 12');
            console.log('License suspended');
            break;
        default:
            console.log('Demerit point is not precise');
            break;
    }

}
