// 376: https://leetcode-cn.com/problems/wiggle-subsequence/

var wiggleMaxLength = function (nums) {
  let prevDiff = 0, curDiff = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    curDiff = nums[i] - nums[i - 1];
    if ((prevDiff <= 0 && curDiff > 0) || (prevDiff >= 0 && curDiff < 0)) {
      count++;
      prevDiff = curDiff;
    }
  }
  return count;
};