"use strict";

// "Fizz buzz" is a word game we will use to teach the robots about 
// division. Let's learn computers.

// You should write a function that will receive a positive integer 
// and return:
// "Fizz Buzz" if the number is divisible by 3 and by 5;
// "Fizz" if the number is divisible by 3;
// "Buzz" if the number is divisible by 5; 
// The number as a string for other cases.
// Input: A number as an integer.

// Output: The answer as a string.

function fizzBuzz(data) {
   

    let result = (data % 3 === 0) && (data % 5 === 0 ) ? "Fizz Buzz" : 
    				(data % 3 === 0) ? "Fizz" : 
   					(data % 5 === 0 ) ? "Buzz" : String(data);
    
    return result;
}



