"use strict";

// You have a table with all available goods in the store. The data is 
// represented as a list of objects

// Your mission here is to find the TOP most expensive goods. The amount 
// we are looking for will be given as a first argument and the whole 
// data as the second one

// Input: Integer and array of objects. Each objects has two attributes 
// "name" and "price"

// Output: the same as the second Input argument.

function biggerPrice(limit, data) {
return data.slice().sort((a, b) => {return b.price - a.price}).slice(0, limit);  
}





