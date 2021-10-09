// 122: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    result += (prices[i + 1] - prices[i]) < 0 ? 0 : prices[i + 1] - prices[i]
  }
  return result;
};