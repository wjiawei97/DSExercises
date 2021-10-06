// 977: https://leetcode-cn.com/problems/squares-of-a-sorted-array/

var sortedSquares = function (nums) {
  let rst = new Array(nums.length);
  let i = 0, j = nums.length - 1, k = nums.length - 1;
  while (i <= j) {
    rst[k--] = nums[j] * nums[j] > nums[i] * nums[i] ? nums[j] * nums[j--] : nums[i] * nums[i++]
  }
  return rst;
}

var sortedSquares = function (nums) {
  let res = [];
  for (let i = 0, j = nums.length - 1; i <= j;) {
    let left = Math.abs(nums[i])
    let right = Math.abs(nums[j])
    if (right > left) {
      res.unshift(right * right);
      j--;
    } else {
      res.unshift(left * left);
      i++;
    }
  }
  return res;
}