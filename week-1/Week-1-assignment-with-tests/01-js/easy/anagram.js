/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;
  if( n1 != n2 ) return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  var arr1 = new Map();
  for(let i = 0; i < n1; i++){
    if(!arr1.has(str1.charAt(i))){
      arr1.set(str1.charAt(i), 0);
    }
    arr1.set(str1.charAt(i), arr1.get(str1.charAt(i))+1);
  }
  console.log(arr1);
  for(let i = 0; i < n2; i++){
    if(!arr1.has(str2.charAt(i))){
      return false;
    }
    arr1.set(str2.charAt(i), arr1.get(str2.charAt(i))-1);
    if(arr1.get(str2.charAt(i)) == 0){
      arr1.delete(str2.charAt(i));
    }
  }
  console.log(arr1);
  if(arr1.size != 0) return false;
  return true;
}

module.exports = isAnagram;
