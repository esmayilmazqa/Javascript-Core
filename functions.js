// sum of two numbers -classic function declaring
function sum(a, b) {
    return a + b;
}

let sumResult = sum(2, 3);
console.log("Result : " + sumResult);

// anonymous (without name) function
var sumOfInteger = function (a, b) {
    return a + b;
}

console.log("anonymous : " +sumOfInteger(1,3));

// arrow function
var sumOfNumbers = (a,b) => a+b;
console.log("arrow : "+ sumOfInteger(2,4));


