// 20. Valid Parentheses

// Given a string s containing just the characters
//'(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const openedBrackets = [];

  for (let i = 0; i < s.length; i++) {
    const lastOpenedBracket = openedBrackets[openedBrackets.length - 1];

    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      openedBrackets.push(s[i]);
    } else {
      if (
        !openedBrackets.length ||
        (s[i] === ")" && lastOpenedBracket !== "(") ||
        (s[i] === "]" && lastOpenedBracket !== "[") ||
        (s[i] === "}" && lastOpenedBracket !== "{")
      ) {
        return false;
      } else {
        openedBrackets.pop();
      }
    }
  }

  return !openedBrackets.length;
};

const s = "[()]()";

console.log("====================================");
console.log(isValid(s));
console.log("====================================");
