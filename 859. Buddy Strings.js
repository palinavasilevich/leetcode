// 859. Buddy Strings
// Given two strings s and goal, return true if you can swap two letters in s so the result
// is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed)
//  such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    return s.length !== new Set(s).size;
  }

  const diff = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      diff.push(i);
    }

    if (diff.length > 2) {
      return false;
    }
  }

  const [i, j] = diff;
  return s[i] === goal[j] && s[j] === goal[i];
};

const s = "ab";
const goal = "ab";

console.log(buddyStrings(s, goal));
