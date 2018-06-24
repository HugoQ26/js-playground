"use strict";

// You have a sequence of strings, and you’d like to determine the most 
// frequently occurring string in the sequence.

// Input: a Array of strings.

// Output: a string.

function mostFrequent(data) {
    
    let mostFreq = 1;
    let count = 0;
    let item;

    for (let i = 0; i < data.length; i++) {

        for(let j = i; j < data.length; j++) {

            if (data[i] == data[j]) {
                count++;
            }
            if (mostFreq < count) {
                mostFreq = count
                item = data[i];
            }
        }
        count = 0;
    }

    return item || data[0];
}


  
