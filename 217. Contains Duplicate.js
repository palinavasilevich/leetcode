/* 217. Contains Duplicate */
// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* #1 */
// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};

/* #2 */
// var containsDuplicate = function (nums) {
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i + 1]) {
//       return true;
//     }
//   }

//   return false;
// };

/* #3 */
// var containsDuplicate = function (nums) {
//   const duplicates = [];

//   for (let i = 0; i < nums.length; i++) {
//     if (duplicates.includes(nums[i])) {
//       return true;
//     } else {
//       duplicates.push(nums[i]);
//     }
//   }

//   return false;
// };

const nums1 = [1, 2, 3, 1];
const nums2 = [1, 2, 3, 4];

console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));
