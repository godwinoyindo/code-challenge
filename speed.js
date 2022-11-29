
//Function to determine the fate of driver license if the speed exceed the limit

function generateDemeritPoint(){
    //Get speed input prompt
    
    let speed = prompt('Enter speed of the car: ');

    //Generate demerit points
    switch(true){
        case (speed < 70 && speed > 0): 
            alert('Ok');
            break;
        case (speed == 75):
            alert('Demerit point is 1');
            break;
        case (speed == 80):
            alert('Demerit point is 2');
            break;
        case (speed == 85):
            alert('Demerit point is 3');
            break;
        case (speed == 90):
            alert('Demerit point is 4');
            break;
        case (speed == 95):
            alert('Demerit point is 5');
            break;
        case (speed == 100):
            alert('Demerit point is 6');
            break;
        case (speed == 105):
            alert('Demerit point is 7');
            break;
        case (speed == 110):
            alert('Demerit point is 8');
            break;
        case (speed == 115):
            alert('Demerit point is 9');
            break;
        case (speed == 120):
            alert('Demerit point is 10');
            break;
        case (speed == 125):
            alert('Demerit point is 11');
            break;
        case (speed == 130):
            alert('Demerit point is 12');
            break;
        case (speed > 130):
            alert('Demerit point is more than 12. License suspended');
            break;
        case (speed==null || speed==undefined):
            
            break;
        default:
            alert('Demerit point is not precise');
            break;
    }

}
