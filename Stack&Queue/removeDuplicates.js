// 1047: https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  let result = '';
  for (let x of s) {
    if (stack.length === 0) {
      stack.push(x);
    } else if (stack[stack.length - 1] === x) {
      stack.pop();
    } else {
      stack.push(x)
    }
  }

  return stack.join('');
};