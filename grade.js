/*Initiate input prompt*/
const prompt = require("prompt-sync")({sigint:true});

/*Student Grade Generator Challenge*/
console.log('STUDENT GRADE GENERATOR');
getStudentGrade();

function getStudentGrade(){
    //Get marks prompt
    
    let studentMarks = prompt('Enter student marks: ');

    //Generate student grade
    switch(studentMarks){
        case (studentMarks > 79 && studentMarks <= 100):
            console.log('The student grade is A');
            break;
        case (studentMarks >= 60 && studentMarks <= 79):
            console.log('The student grade is B');
            break;
        case (studentMarks >= 49 && studentMarks <= 59):
            console.log('The student grade is C');
            break;
        case (studentMarks >= 40 && studentMarks < 49):
                console.log('The student grade is D');
                break;
        default:
                console.log('The student grade is E');
                break;
    }

}

