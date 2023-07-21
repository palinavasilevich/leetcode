/* One-pass Hash Table */
var twoSum = function (nums, target) {
  const hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    hashmap[nums[i]] = i;
    const complement = target - nums[i];

    console.log(complement);

    if (complement in hashmap && hashmap[complement] != i) {
      return [i, hashmap[complement]];
    }
  }
};

/* Brute Force */
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

/* Two-pass Hash Table */
// var twoSum = function (nums, target) {
//   const hashmap = {};

//   for (let i = 0; i < nums.length; i++) {
//     hashmap[nums[i]] = i;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (complement in hashmap && hashmap[complement] !== i) {
//       return [i, hashmap[complement]];
//     }
//   }
// };

const nums = [2, 7, 11, 15];

console.log("====================================");
console.log(twoSum(nums));
console.log("====================================");
