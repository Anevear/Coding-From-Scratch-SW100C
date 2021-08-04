function nameInfo(){
    var firstName = document.getElementById('firstName').value;
    var middleName = document.getElementById('middleName').value;
    var lastName = document.getElementById('lastName').value;

    
    document.getElementById("fullName").innerHTML = firstName + " " + middleName + " " + lastName;
    
}