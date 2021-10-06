// No.27: https://leetcode-cn.com/problems/remove-element/

// slow & fast pointer
// fast pointer: point to the num need to be processed
// slow poniter: point to the position to be overwritten
var removeElement = function (nums, val) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast]
    }
  }
  return slow;
}