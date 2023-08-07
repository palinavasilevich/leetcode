// 58. Length of Last Word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */

/* #1 */
var lengthOfLastWord = function (s) {
  if (!s.includes(" ")) {
    return s.length;
  }

  return s.trim().split(" ").pop().length;
};

/* #2 */
// var lengthOfLastWord = function (s) {
//   if (!s.includes(" ")) {
//     return s.length;
//   }

//   const items = s.trim().split(" ");
//   const lengthItems = items.length;
//   return items[lengthItems - 1].length;
// };

const str = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(str));
