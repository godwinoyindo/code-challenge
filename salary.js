function calculateSalaryAndTax(){
    const NSSF = 200.00; //NSSF presumed to be constant across salary ranges
    
    let basicSalary = prompt('Enter basic salary: '); //Only the basic salary required

    if(basicSalary != null || basicSalary != undefined){

        let totalBenefits = prompt('Enter total benefits: '); //Only the sum up of benefits

        if(totalBenefits != null || totalBenefits != undefined){

            //Calculation of gross salary 
            
            let grossSalary = parseFloat(basicSalary) + parseFloat(totalBenefits); 
            
            //Presumption, gross salary below 200 is ignored
             if(grossSalary > NSSF){

                //Calculation of taxeble income
                let taxebleIncome = grossSalary - NSSF;

                //Calculation of income tax
                //initialize incomeTax
                let incomeTax = 0.00;
                if(taxebleIncome > 0 && taxebleIncome <= 24000){
                    incomeTax = taxebleIncome * 0.10;
                }else if(taxebleIncome >= 24001 && taxebleIncome <= 32333){
                    incomeTax = taxebleIncome * 0.25;
                }else if(taxebleIncome > 32333){
                    incomeTax = taxebleIncome * 0.30;
                }

                //Calculation of PAYEE, assuming no relief is awarded

                let payee = incomeTax;

                //Calculation of NHIF25 from gross income
                //Initialize NHIF
                let NHIF = 0.00;
                switch(true){
                    case (grossSalary > 0 && grossSalary <= 5999):
                        NHIF = 150;
                        break;
                    case (grossSalary >= 6000 && grossSalary <= 7999):
                        NHIF = 300;
                        break;
                    case (grossSalary >= 8000 && grossSalary <= 11999):
                        NHIF = 400;
                        break;
                    case (grossSalary >= 12000 && grossSalary <= 14999):
                        NHIF = 500;
                        break;
                    case (grossSalary >= 15000 && grossSalary <= 19999):
                        NHIF = 600;
                        break;
                    case (grossSalary >= 20000 && grossSalary <= 24999):
                        NHIF = 750;
                        break;
                    case (grossSalary >= 25000 && grossSalary <= 29999):
                        NHIF = 850;
                        break;
                    case (grossSalary >= 30000 && grossSalary <= 34999):
                        NHIF = 900;
                        break;
                    case (grossSalary >= 35000 && grossSalary <= 39999):
                        NHIF = 950;
                        break;
                    case (grossSalary >= 40000 && grossSalary <= 44999):
                        NHIF = 1000;
                        break;
                    case (grossSalary >= 45000 && grossSalary <= 49999):
                        NHIF = 1100;
                        break;
                    case (grossSalary >= 50000 && grossSalary <= 59999):
                        NHIF = 1200;
                        break;
                    case (grossSalary >= 60000 && grossSalary <= 69999):
                        NHIF = 1300;
                        break;
                    case (grossSalary >= 70000 && grossSalary <= 79999):
                        NHIF = 1400;
                        break;
                    case (grossSalary >= 80000 && grossSalary <= 89999):
                        NHIF = 1500;
                        break;
                    case (grossSalary >= 90000 && grossSalary <= 99999):
                        NHIF = 1600;
                        break;
                    case (grossSalary >= 100000 ):
                        NHIF = 1700;
                        break;
                }

                //Calculation of net salary
                let netSalary = grossSalary - payee - NHIF;
                document.getElementById('display').innerHTML = "Basic Salary: Ksh "+basicSalary+
                "<br/>Total Benefits: Ksh "+totalBenefits+
                "<br/>Payee: Ksh "+payee.toFixed(2)+
                "<br/>NHIF: Ksh "+NHIF+
                "<br/>NSSF: Ksh "+NSSF+
                "<br/>Gross Salary: Ksh "+grossSalary+
                "<br/>Net Salary: Ksh "+netSalary.toFixed(2);
                
             }else{
                alert('Sorry, the salary is below our threshold');
             }

        }
    }
}