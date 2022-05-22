// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

detectWord = word => {
    let hiddenWord = "";
    for (i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === word[i]) {
            hiddenWord += word[i];
        }
    }
    console.log(hiddenWord);
}

//detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("UcUNFYGaFYFYGtNUH");

//detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"

detectWord("bEEFGBuFBRrHgUHlNFYaYr");

//detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment");