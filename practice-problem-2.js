// Practice Problem 2

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
// Bangla of a student.

var math = 75.25 ;
var biology = 65 ;
var chemistry = 80 ;
var physics = 35.45 ;
var bangla = 99.50 ;

var totalNumber = math + physics + chemistry + biology + bangla ;
var avgNumber = totalNumber / 5;

var decimalAvgNumber = avgNumber.toFixed(2);
console.log("The average marks of Mentioned five subject is = " + decimalAvgNumber);
