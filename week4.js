/*
Longest Word

Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
*/

function LongestWord(sen) { 
    var arr = sen.replace(/[^a-zA-Z ]/g,"").split(" ");
  
    arr.sort(function(a,b) { return b.length - a.length } );
    return arr.shift();

    // code goes here  
    return sen; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord("What is the longest word?"));