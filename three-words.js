"use strict";

// Let's teach the Robots to distinguish words and numbers.

// You are given a string with words and numbers separated by 
// whitespaces (one space). The words contains only letters. 
// You should check if the string contains three words in succession. 
// For example, the string "start 5 one two three 7 end" contains 
// three words in succession.

// Input: A string with words.

// Output: The answer as a boolean.

function threeWords(data) {


    var data2 = data.split(" ");
    
    var arrCheck = (i) => {
    	return i.match(/[^0-9]/g);
        }
    
    var result = false;
    
    if(data2.length >= 3) {
    	for(let i = 0; i < data2.length - 2; i++ ) {
    		if(arrCheck(data2[i]) && arrCheck(data2[i+1]) && arrCheck(data2[i+2])) {
    			result += true;
    		}
    	}
    } else {
    	return false;
    }
    
    if(result > 0) {
    	return true;
    } else {
    	return false;
    }
}
	


var assert = require('assert');

if (!global.is_checking) {
    assert.equal(threeWords("Hello World hello"), true, "1st example");
    assert.equal(threeWords("He is 123 man"), false, "2nd example");
    assert.equal(threeWords("1 2 3 4"), false, "3rd example");
    assert.equal(threeWords("bla bla bla bla"), true, "4th example");
    assert.equal(threeWords("Hi"), false, "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
