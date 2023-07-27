// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing
// a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

/**
 * @param {number[]} prices
 * @return {number}
 */

/* 1 */
var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    profit = Math.max(profit, prices[i] - min);
  }

  return profit;
};

/* 2 */
// var maxProfit = function (prices) {
//   let min = 0;
//   let profit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] < min || i === 0) {
//       min = prices[i];
//     }

//     let diff = prices[i + 1] - min;

//     if (diff > 0 && diff > profit) {
//       profit = diff;
//     }
//   }

//   return profit;
// };

/* 3 */
// var maxProfit = function (prices) {
//     let left = 0;
//     let right = 1;
//     let maxProfit = 0;

//     while (right < prices.length) {
//       if (prices[left] < prices[right]) {
//         let profit = prices[right] - prices[left];
//         maxProfit = Math.max(maxProfit, profit);
//       } else {
//         left = right;
//       }
//       right++;
//     }

//     return maxProfit;
//   };

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
