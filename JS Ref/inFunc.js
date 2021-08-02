//Example 1 will just pop up an alert
function calculateNumbers(){
    //the function declared is calculateNumbers 0 parameters
    var number1 = 10; //the first variable
    var number2 = 3; // this is the 2nd
    var number3 = number1 + number2; // this variable adds v1&v2

    if (number3 >= 10){ //if n1+n2 are 10 or higher
        alert("Big Number"); //then this will alert
    }
    else { //if n1+n2 is NOT 10+ the this one will alert
        alert("Small number");
    }
}
calculateNumbers(); //this is calling/invoking the function to exe its code. the result is 13 so "Big Number" will alert


//Example 2 open [ctrl]+[shift]+ i to see code below in console
function loopingThroughArray(nameArray){
    //function is named loopingThroughArray and the parameter is the nameArray that is a name arrary named names
    for (var i = 0; i < nameArray.length; i++){
        //var i is the index starting at 0
        //i will not hv a val more than the length of the array
        //the lentgh is 4 but the index will be 0-3
        //i will incr by 1 on each iteration
        console.log("I admire " + nameArray[i]);
        //console.log will show to the console "I admire" then cycle thru ea name in the nameArray- name by index
        }
}
var names = ["Jacob", "Damon", "Lee", "Eric"];
loopingThroughArray(names);

//In Ex1 the var are declared in the function, then its invoked/called
//In Ex2 the var that is an array is declared after the function, this is fine.

//Example 3
function loopingThroughArray2(){
    var nameArray = ["Jacob", "Lee", "Damon", "Eric"];

    for (var i = 0; i < nameArray.length; i++){
        if (nameArray[i] === "Jacob"){
            console.log("Jacob is my brother!");
        }
        else if (nameArray[i] === "Lee"){
            console.log("Lee is a friend.");
        }
        else if (nameArray[i] === "Damon"){
            console.log("Damon is a coworker.");
        }
        else if (nameArray[i] === "Eric"){
            console.log("I've never met Eric.");
        }
    }
    return "Done looping the nameArray!";
}
var result = loopingThroughArray2();
alert(result)

