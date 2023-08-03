// 88. Merge Sorted Array
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function,
// but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
//  where the first m elements denote the elements that should be merged,
//  and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/* #1 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  return nums1;
};

/* #2 */
// var merge = function (nums1, m, nums2, n) {
//   let j = 0;

//   for (let i = 0; i < nums1.length; i++) {
//     if (i > m - 1 && j < n) {
//       nums1[i] = nums2[j];
//       j++;
//     }
//   }

//   nums1.sort((a, b) => a - b);

//   return nums1;
// };

/* #3 */
// var merge = function (nums1, m, nums2, n) {
//   let k = 0;
//   let temp;

//   for (let i = 0; i < nums1.length; i++) {
//     if (i > m - 1 && k < n) {
//       nums1[i] = nums2[k];
//       k++;
//     }

//     for (let j = i; j >= 0; j--) {
//       if (nums1[j] < nums1[j - 1]) {
//         temp = nums1[j];
//         nums1[j] = nums1[j - 1];
//         nums1[j - 1] = temp;
//       }
//     }
//   }

//   return nums1;
// };

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

console.log(merge(nums1, m, nums2, n));
