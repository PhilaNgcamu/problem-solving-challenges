// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by a rearranging the letters of another, such as cinema, formed from iceman.

// 1. Naive approach - incorrect
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) return false;
  }
  return true;
}

console.log(validAnagram("cinema", "iceman"));
