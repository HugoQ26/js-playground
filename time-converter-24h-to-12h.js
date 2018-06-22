"use strict";

// You prefer a good old 12-hour time format. But the modern world we 
// live in would rather use the 24-hour format and you see it everywhere. 
// Your task is to convert the time from the 24-h format into 12-h format 
// by following the next rules:
// - the output format should be 'hh:mm a.m.' (for hours before midday) 
// or 'hh:mm p.m.' (for hours after midday)
// - if hours is less than 10 - don't write a '0' before it. For example: 
// '9:05 a.m.'
// Here you can find some useful information about the 12-hour format.


// Input: Time in a 24-hour format (as a string).

// Output: Time in a 12-hour format (as a string).

function timeConverter(dayTime) {
   
    var arr = dayTime.split(":");
    
   return arr[0] < 12 ? 
     `${arr[0] == "00" ? +arr[0]+12 : Number(arr[0])}:${arr[1]} a.m.` : 
        `${Number(arr[0] == 12 ? arr[0] : arr[0]-12)}:${arr[1]} p.m.`;
   
}

   
    
