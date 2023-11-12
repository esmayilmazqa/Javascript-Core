/*
// length
let day = "tuesday ";
console.log("Length of str : " + day.length);

// substring
console.log("*** substring ****");
let subStr = day.slice(0, 5);
console.log(subStr)

// reach to character
console.log("First char : "+ day[0])
*/

// Split
/*
var monday = "Monday";
var splitDay = monday.split("n");
console.log("Today : " + monday);
console.log("First : "+ splitDay[0]);
console.log("Second : "+ splitDay[1]);
*/

// trim
/*
var day = "   Monday ";
console.log(day);
console.log(day.trim());
*/

// String to integer
/*
let day = '23';
let nextDay = '28';
let diff = parseInt(nextDay) - parseInt(day);
console.log("Difference : " + diff);
console.log("ToString : "+ diff.toString().length);
*/
// concatenate
/*
let day = "Monday";
let text = day + " is a Funday";
console.log(text);
*/

var text = "Monday is a Funday";

var count = 0;
let indexVal = text.indexOf("day");
while (indexVal !== -1) //bulamazsa -1 doner
{
    count++;
    console.log("day index : " + indexVal);
    indexVal = text.indexOf("day", indexVal + 1); // bu deger den itibaren aramaya baslar

}
console.log("Number of day : " + count);
