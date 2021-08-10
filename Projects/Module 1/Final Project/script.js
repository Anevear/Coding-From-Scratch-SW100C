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