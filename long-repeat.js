"use strict";

// Here you should find the length of the longest substring that consists 
// of the same letter. For example, line "aaabbcaaaa" contains four 
// substrings with the same letters "aaa", "bb","c" and "aaaa". The last 
// substring is the longest one which makes it an answer.

// Input: String.

// Output: Int.

function longRepeat(line) {
    
    let count = 0;
    let maxcount = 0;
    let char = "";
    
    for(let i = 0; i < line.length; i++) {
    	for(let j = 0; j < line.length; j++) {    
               if (line[i] === line[j]) {
                count ++
               } else { count = 0}
               if (maxcount < count) {
                maxcount = count;
                char = line[j];
               } 
    	}
    	count = 0;
    }
   
    return maxcount;
}
