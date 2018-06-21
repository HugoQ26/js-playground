"use strict";

// You are given a positive integer. Your function should calculate 
// the product of the digits excluding any zeroes.

// For example: The number given is 123405. The result will be 
// 1*2*3*4*5=120 (don't forget to exclude zeroes).

// Input: A positive integer.

// Output: The product of the digits as an integer.

function digitsMultip(data) {
let str = String(data);
let res = str.match(/[1-9]/g);
var result = 1;

for(let i of res) result *= i;

return result;

}
