function isPalindrome(word) {
  var re = /[\W_]/g;
  var lowRegStr = word.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
//Palindrome is a word that is spelt the same way backward and forward.

//For this function we need an if statement to check whether the word is a Palindrome or not.

/* 
  LINE 2:First we define a variable re to it we equal it to /[\W_,.]/g which means:
  / ... /g It's a global regex. So it'll operate on multiple matches in the string.
 [ ... ] This creates a character set. Basically it'll match any single character within the listed set of characters.
 \W_ This matches the inverse of "word characters" and underscores. Any non-word character.
  LINE 3:Define a new variable lowRegStr which is assigned to the parameter changed into lowerCase and 
  replaces it with an empty  string.
  LINE 4:Defines a new variable reverseStr which takes the lowRegStr and splits the string into 
  an array of sub strings which is reversed then joined back together.

*/

/*
-The toLowerCase() method to return the calling string value converted to lowercase.
-The replace() method to return a new string with some or all matches of a pattern replaced by a replacement. We will use one of the RegExp we just created earlier.
-The split() method splits a String object into an array of strings by separating the string into sub strings.
-The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
-The join() method joins all elements of an array into a string. 
-Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
