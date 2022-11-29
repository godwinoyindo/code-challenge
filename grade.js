
//STUDENT GRADE GENERATOR

function getStudentGrade(){
    //Get marks prompt
    
    let studentMarks = prompt('Enter student marks: ');

    //Generate student grade
    switch(true){
        case (studentMarks > 79 && studentMarks <= 100):
            alert('The student grade is A');
            break;
        case (studentMarks >= 60 && studentMarks <= 79):
            alert('The student grade is B');
            break;
        case (studentMarks >= 49 && studentMarks <= 59):
            alert('The student grade is C');
            break;
        case (studentMarks >= 40 && studentMarks < 49):
            alert('The student grade is D');
            break;
        case (studentMarks < 40 && studentMarks > 0):
            alert('The student grade is D');
            //document.writeln('The student grade is D');
            break;
        case (studentMarks==null || tudentMarks==undefined):
            
            break;
        default:
            alert('Sorry, the marks entered is not allowed');
            break;
    }

}

