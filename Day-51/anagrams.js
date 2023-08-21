// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by a rearranging the letters of another, such as cinema, formed from iceman.

// 1. Naive approach - incorrect
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str2.length; i++) {
    if (!str1.includes(str2[i])) return false;
  }
  return true;
}

// 2. Correct approach using frequency counter pattern

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};
  for (let i = 0; i < str1.length; i++) {
    lookup[str1[i]] = (lookup[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!lookup[str2[i]]) return false;
    else lookup[str2[i]] -= 1;
  }
  return true;
}
console.log(validAnagram("cinema", "iceman"));
