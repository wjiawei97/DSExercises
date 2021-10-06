// 209: https://leetcode-cn.com/problems/minimum-size-subarray-sum/

var minSubArrLen = function (nums, target) {
  let i = j = sum = 0;
  let subLen = nums.length + 1;
  while (j < nums.length) {
    sum += nums[j++];
    while (sum > target) {
      subLen = subLen < j - i ? subLen : j - i;
      sum -= nums[i++]
    }
  }
  return subLen > nums.length ? 0 : subLen;
}