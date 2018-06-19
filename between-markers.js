"use strict";

// You are given a string and two markers (the initial and final). 
// You have to find a substring enclosed between these two markers. 
// But there are a few important conditions:

// The initial and final markers are always different.
// If there is no initial marker then the beginning should be considered 
// as the beginning of a string.
// If there is no final marker then the ending should be considered 
// as the ending of a string.
// If the initial and final markers are missing then simply return 
// the whole string.
// If the final marker is standing in front of the initial one then 
// return an empty string.
// Input: Three arguments. All of them are strings. The second and 
// third arguments are the initial and final markers.

// Output: A string.


function betweenMarkers(text, begin, end) {
   
    let dlBegin = 0; 
    let pocz = 0;
    let kon = 0;
    let ifBegin = text.includes(begin);
    let ifEnd = text.includes(end);

if(begin && end) {
    dlBegin = begin.length-1; 
    pocz = text.indexOf(begin) + dlBegin;
    kon = text.indexOf(end);
}
    
  
 if((begin && end) && (pocz < kon) && (ifBegin === true) && (ifEnd === true)) {

    dlBegin = begin.length-1; 
    pocz = text.indexOf(begin) + dlBegin;
    kon = text.indexOf(end);
    

 } else if((ifBegin === false) && (ifEnd === true)) {

    pocz = -1;
    kon = text.indexOf(end);
   

  } else if((ifBegin === true) && (ifEnd === false)) {
    
    dlBegin = begin.length-1; 
    pocz = text.indexOf(begin) + dlBegin;
    kon = text.length;
   

  } else if((ifBegin === false) && (ifEnd === false)) {
    
    return text;

  } else if((begin && end) && (pocz > kon)) {
   
    return "";

  }
    return text.substring(pocz + 1, kon);
   
}


