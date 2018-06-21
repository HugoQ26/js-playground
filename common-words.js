"use strict";

// Let's continue examining words. You are given two string with words 
// separated by commas. Try to find what is common between these strings. 
// he words are not repeated in the same string.

// Your function should find all of the words that appear in both strings. 
// The result must be represented as a string of words separated by 
// commas in alphabetic order.

// Input: Two arguments as strings.

function commonWords(first, second) {
   let strArr = first.split(",").concat(second.split(",")).sort();
   
   let result = [];

   for(let i = 0; i < strArr.length; i++) {
   		if(strArr[i] === strArr[i+1]) {
   			result.push(strArr[i]);
   		}
   }
   return result.toString();
}
