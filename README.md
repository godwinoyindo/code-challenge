# Description
This is a 
# Title: Week One code challenge
The project contains three solutions to the three challenges of week one code challenge. All the three challenges are run and tested on browser.
The file “index.html” contains all the three challenges. 

# Getting Started
In order for you to use the content on this repo ensure you have the following:

- A computer that runs on either of the following; (Windows 7+, Linux, Mac OS)
- node index.html
- Some bit of patience for your own sanity.

## Installation

To use this repo on your machine requires some simple steps

### Alternative One

- Open a terminal / command line interface on your computer
- Clone the repo by using the following:

        git clone https://git@github.com:godwinoyindo/code-challenge.git

- Be patient as it creates a copy on your local machine for you.
- Change directory to the repo folder:

        cd code-challenge

- (Optional) Open it in ``Visual Studio Code``

        code .

- (Alternate Option) Open it in any editor of your choice.

# Running the application

Running the application is very straight forward. You can use the following steps to run the app.

- Install required dependencies from npm

      npm install
- Run the application

      node<file name>.<file extension> e.g node index.js
 To execute it, run it on any browser. The challenges are chronologically arranged with the first challenge comming at the top. "Buttons" are used to aid the click events and initiate input prompts in all the challenges.

# Authors
This project was contributed to by:
- [Godwin Oyindo](https://github.com/godwinoyindo/code-challenge)

# License
The project is licensed under Apache 2.0.

# Additions
The first challenge accept student marks as input, calculate and printout a grade that correspond to the marks entered. The file containing the function for challenge one is named “grade.js”.
In the "grade.js", the function named below is aided with the switch statement to facilitate and determine student final grade.

getStudentGrade(){

}

The second challenge prompt for speed of a car, once the speed is typed, a function in the file “speed.js” calculates and determines whether the demerit points exceed the threshold point, if it exceeds, the driver license is suspended otherwise the demerit point is printed out.
The function stated below facilitates all these aided with switch statement.

generateDemeritPoint(){

}


The third challenge is a model that accept basic salary and total benefits as input, then calculate the Net salary, payee, Gross Salary, NHIF and NSSF deductions. The javascript file containing the function is named “salary.js”.

calculateSalaryAndTax(){

}

The above function in the "salary.js" is reinforced with both "switch" and "if else" statement to aid in calculating and printing out of the final result.
NSSF with a value 200.00, is presumed constant in all the calculations. NHIF is not considered as insurance relief as stated from 1st January 2022. Both personal relief and insurance relief are not considered in this calculation.