import React from 'react';

export function Palindrome(props) {
      //Picking characters with a-z and 0-9 in an array 
     let letters = str.match(/[a-z0-9]/gi)
     //An array to a string
     .join("")  
     .toLowerCase();
    
     //i start from 0 and j start from end 
     for (let i = 0; i < letters.length; i++) {
       for (let j = letters.length - 1; j >= 0; j--) {
         //If i and j get to middle and then return true
         //i, j should search till middle and
         if (i != j && i < j) {
           //If both characters are same then increase i
           if (letters[i] == letters[j]) {
             i++;
           } else {
           //Else return false
             return false;
           }
         } else {
           return true;
         }
       }
     }
}

export default Palindrome;