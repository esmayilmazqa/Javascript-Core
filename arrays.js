/*
var names = Array(3);

names[0] = "Ahmet";
names[1] = "Mahmut";
console.log(names);

let cities = new Array("Ankara", "İstanbul", "Kastamonu");
console.log(cities);

var numbers = [1, 2, 3, 4, 7];
console.log(numbers);
*/
/*
var names = new Array(2);
names[0] = "Ali";
names[1] = "Omar"
names[2] = "Ahmet";
console.log(names);

var arrayLength = names.length;
console.log("Array Size : " + arrayLength);

names.push("Esma");
console.log(names);

names[names.length] = "Osman"; // as an alternative
console.log(names);

console.log(names.pop());
console.log(names);

console.log(names.unshift("Arda"));
console.log(names);

console.log(names.indexOf("Arda"));
console.log(names.includes("Esma"));
console.log(names.includes("Elif"));
*/

/*
var numbers = [1, 2, 3, 4, 5];

var subnumbers = numbers.slice(2, 4);
console.log("numbers : " + numbers);
console.log("sub array : " + subnumbers);
*/

/*
var numbers = [1, 2, 3, 4, 5];
let totalSum = numbers.reduce((sub, number) => sub + number, 0);
console.log("Numbers total sum : " + totalSum);
*/

/*
var scores = [11, 12, 13, 14, 15, 16];
let dividersBy2 = [];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        dividersBy2.push(scores[i])
    }
}
console.log(dividersBy2)

console.log("-------------------------");
let evenSubArray = scores.filter(score => score % 2 == 0);
console.log(evenSubArray);
*/

/*
var numList = [1, 2, 3];
console.log("Original List : " + numList);
let mapList = numList.map(value => value * 3);
console.log("Map list : " + mapList);
let filterList = numList.filter(value => value % 2 == 1);
console.log("Filter list : " + filterList);
let reduceResult = numList.reduce((sum, value) => sum + value, 0);
console.log("Reduce result : " + reduceResult);
*/

/*
var numList = [1, 2, 3];
console.log("*** chain process ***");
console.log("Original List : " + numList);

let finalList = numList.filter(value => value % 2 == 1).map(value => value * 4).reduce((sum, value) => sum + value, 0);
console.log("chain list = " + finalList);
*/

/*
var fruits = ["banana", "apple", "mango", "cherry"];
console.log("original array : \n" + fruits);
fruits.sort();
console.log("string sort : \n" + fruits);
*/

/*
var numbers = [91, 22, 45, 11, 1];
console.log("original numAr : \n\t" + numbers);
console.log("sorted num : \n\t" + numbers.sort());
*/

/*
var numbers = [22,002, 89, 31];
console.log("origin ar : \n\t" + numbers);
console.log("sorted arr : \n\t" + numbers.sort());

numbers.sort(function (a, b) {
    return a - b;
})

numbers.sort((a, b) => a - b);

console.log(numbers);
*/

// var numbers = [22,002, 89, 31];
var numbers = [22,2, 89, 31];
console.log("origin ar : \n\t" + numbers);
console.log("sorted arr : \n\t" + numbers.sort());
console.log("sorted arr : \n\t" + numbers.reverse());
