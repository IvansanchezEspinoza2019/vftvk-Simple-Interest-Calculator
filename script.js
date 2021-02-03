function compute()
{
    // calculate all the data
    p = document.getElementById("principal").value;
    interest_rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;

    
    if(p){ // if the principal amount of money was given
            if(p <= 0){// if is not a positive number
                alert("Please add a positive number");
                return;
            }
            //make the operation
            result =  p * years * interest_rate / 100.0;
    
            //get actual date
            actualDate = new Date();
            // calculate the year
            futureDate = new Date(actualDate.getFullYear()+parseInt(years), actualDate.getMonth(), actualDate.getDate());
            
            console.log("Finished...");

            // show the results
            document.getElementById("result").innerHTML =  
            "If you deposit <mark><strong>"+p+"</strong></mark> at "+
            "an interest rate of <mark><strong>"+interest_rate+"% </strong></mark>."+
            "You will receive an amount of <mark><strong>"+result.toFixed(2)+"</strong></mark>," +
            "in the year <mark><strong>"+futureDate.getFullYear()+"</strong><mark>.";
    }
    else{
        alert("Please fill all the required data..");
    }

    
}

function updateRes(){
   // updates the value for interest rate input element
    valueRange = document.getElementById("rate").value;
    document.getElementById("rangeText").innerHTML=" "+valueRange+"%";
    
}
        
function loadAll(){
    // on every page load reset to the default values
    document.getElementById("rate").value = 10.25;
    document.getElementById("rangeText").innerHTML = " 10.25%";
    document.getElementById("principal").value = null;
}