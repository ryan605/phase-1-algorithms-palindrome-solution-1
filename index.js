function isPalindrome(word) {
  const reverseWord =word.split('').reverse().join('')
  if(word === reverseWord)
  {
    return true;
  }
  else
      return false;
}

/* 
  reverse() word
  if word is equal to reversed word 
  return true
  else 
  return false
*/

/*
 1) within the function isPalindrome I created a variable called reverseWord
  2) I took the argument within the function and split it into an array of characters
  3) I then reversed the newly created array
  4) I then joined into a string and stored it inside reverseWord variable
  5) finally i compared the argument and reverseWord
  6) If the matched I returned true otherwise false if they didn't match
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