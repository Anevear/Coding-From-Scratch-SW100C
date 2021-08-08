var numbers = [1,2,3,4,5];
//sum of all the numbers(+)
//product os all the numbers (*)

var sum =0;
var product =1;

for(var i =0; i < numbers.length; i++){
    sum += numbers[i]; //in stead of sum = sum + numbers[i]
    product *= numbers[i];
}

console.log("The sum is " + sum);
console.log("The product is" + product);

//this is adding all of the numbers in the element
//this is also multiplying all the numbers together