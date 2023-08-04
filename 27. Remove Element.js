// 27. Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/*# 2 */
var removeElement = function (nums, val) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[idx] = nums[i];
      idx++;
    }
  }

  return idx;
};

/*# 2 */
// var removeElement = function (nums, val) {
//   let counter = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums[i] = "_";
//       counter++;
//     }
//   }

//   nums.sort();

//   return nums.length - counter;
// };

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;

console.log("====================================");
console.log(removeElement(nums, val));
console.log("====================================");
