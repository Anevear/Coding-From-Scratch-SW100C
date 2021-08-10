// salary based on jobtitle
// project manager 100k
// supervisor 80k
// sales rep 60k

function showOutput(){
    var fullName = document.getElementById("fullName").value;
    var jobTitle =document.getElementById("jobTitle").value;
    var salary;

    if(jobTitle.toLowerCase == "Project Manager"){
        salary = 100000;
    }
    else if(jobTitle.toLowerCase == "Supervisor"){
        salary = 80000
    }
    else if(jobTitle.toLowerCase == "Sales Representative"){
        salary = 60000
    }
    else{
        salary = "Invalid Job Title, there is no salary.";
    }

    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postJobTitle").innerHTML = jobTitle;
    document.getElementById("postSalary").innerHTML = "$" + salary;
}





function idCard(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;

    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;

    var age = parseInt(document.getElementById("age").value);
    var phoneNumber = parseInt(document.getElementById("phoneNum").value);
    
    var numberArray = [];
    
    numberArray.push(age, phoneNumber);
    
    function loopingThroughArray(){
        for(var i = 0; i < numberArray.length; i++){
            if(numberArray[i] > 100){
                document.getElementById("postAge").innerHTML = "Age: " + age;
            }
            else{
                document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber;
            }
        }
    }
    loopingThroughArray(numberArray)
}