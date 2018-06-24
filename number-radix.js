"use strict";

// Do you remember the radix and Numeral systems from math class? 
// Let's practice with it.

// You are given a positive number as a string along with the radix for it. 
// Your function should convert it into decimal form. The radix is less 
// than 37 and greater than 1. The task uses digits and the letters A-Z 
// for the strings.

// Watch out for cases when the number cannot be converted. For example: 
// "1A" cannot be converted with radix 9. For these cases your function 
// should return -1.

// Input: Two arguments. A number as string and a radix as an integer.

function numberRadix(str_number, radix){
    
   
    let d = "";
    for(let i = 0; i < str_number.length; i++) {
    	if (isNaN(parseInt(str_number[i], radix))) {
    		return -1;
    	} else {
    		d += str_number[i];
    	}
    }
    
    return parseInt(d, radix);
    
}

