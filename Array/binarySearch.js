// No.704: https://leetcode-cn.com/problems/binary-search/

// version1: [left,right]
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// version2: [left,right)
var search = function (nums, target) {
  let left = 0, right = nums.length;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return -1;
}