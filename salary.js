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
                
                
             }else{
                alert('Sorry, the salary is below our threshold');
             }

        }
    }
}