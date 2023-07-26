// 242. Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/* 1 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const counter = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    counter[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    counter[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < 26; i++) {
    if (counter[i] !== 0) {
      return false;
    }
  }

  return true;
};

/* 2 */
// var isAnagram = function(s, t) {
//     const ss = s.split("").sort().join();
//     const tt = t.split("").sort().join();
//     return ss === tt;
//   };

/* 3 */

// var isAnagram = function (s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   const ss = s.split("").sort();
//   const tt = t.split("").sort();

//   for (let i = 0; i < ss.length; i++) {
//     if (ss[i] !== tt[i]) {
//       return false;
//     }
//   }

//   return true;
// };

const s1 = "anagram";
const t1 = "nagaram";

const s2 = "rat";
const t2 = "cat";

console.log("====================================");
console.log(isAnagram(s1, t1));
console.log("====================================");

console.log("====================================");
console.log(isAnagram(s2, t2));
console.log("====================================");
