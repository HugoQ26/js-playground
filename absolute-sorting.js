"use strict";

// Let's try some sorting. Here is an array with the specific rules.

// The array has various numbers. You should sort it, but sort it by 
// absolute value in ascending order. For example, the 
// sequence (-20, -5, 10, 15) will be sorted like 
// so: (-5, 10, 15, -20). Your function should return the sorted list .

// Precondition: The numbers in the array are unique by their absolute 
// values.

// Input: An array of numbers .

// Output: The list or tuple (but not a generator) sorted by absolute 
// values in ascending order.

function absoluteSorting(numbers){
    
	function compare(a, b) {
		if (a < 0) a*=(-1);
		if (b < 0) b*=(-1);
		return a - b;
	}
    return numbers.sort(compare);
}


