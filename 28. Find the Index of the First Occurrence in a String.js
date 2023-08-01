// 28. Find the Index of the First Occurrence in a String
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
//  or -1 if needle is not part of haystack.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/* #1 */
var strStr = function (haystack, needle) {
  if (haystack === needle) {
    return 0;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let ss = haystack.slice(i, i + needle.length);

      if (ss === needle) {
        return i;
      }
    }
  }

  return -1;
};

/* #2 */
// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);
// };

/* #3 */
// var strStr = function (haystack, needle) {
//   if (haystack === needle) {
//     return 0;
//   }

//   if (!haystack.includes(needle)) {
//     return -1;
//   }

//   return haystack.split(`${needle}`)[0].length;
// };

const haystack1 = "sadbutsad";
const needle1 = "sad";

const haystack2 = "leetcode";
const needle2 = "leeto";

console.log("================#1==================");
console.log(strStr(haystack1, needle1));
console.log("====================================");

console.log("================#2==================");
console.log(strStr(haystack2, needle2));
console.log("====================================");
