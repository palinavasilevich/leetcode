// 13. Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function (s) {
//   const romanNumbers = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   const ss = s.split("");

//   return ss.reduce((result, val, index) => {
//     if (val === "I" && ss[index + 1] === "V") {
//       result += 4;
//       ss[index + 1] = 0;
//     } else if (val === "I" && ss[index + 1] === "X") {
//       result += 9;
//       ss[index + 1] = 0;
//     } else if (val === "X" && ss[index + 1] === "L") {
//       result += 40;
//       ss[index + 1] = 0;
//     } else if (val === "X" && ss[index + 1] === "C") {
//       result += 90;
//       ss[index + 1] = 0;
//     } else if (val === "C" && ss[index + 1] === "D") {
//       result += 400;
//       ss[index + 1] = 0;
//     } else if (val === "C" && ss[index + 1] === "M") {
//       result += 900;
//       ss[index + 1] = 0;
//     } else if (romanNumbers[val]) {
//       result += romanNumbers[val];
//     }

//     return result;
//   }, 0);
// };

// var romanToInt = function (s) {
//   const romanNumbers = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 400,
//     CM: 900,
//   };

//   const symbols = s.split("");

//   return symbols.reduce((total, item, index) => {
//     const twoSymbols = item + symbols[index + 1];

//     if (romanNumbers[twoSymbols]) {
//       total += romanNumbers[twoSymbols];
//       symbols[index + 1] = 0;
//     } else if (romanNumbers[item]) {
//       total += romanNumbers[item];
//     }

//     return total;
//   }, 0);
// };

var romanToInt = function (s) {
  symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i += 1) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (result -= symbols[s[i]])
      : (result += symbols[s[i]]);
  }
  return result;
};

const s = "MCMXCIV";
console.log(romanToInt(s));
