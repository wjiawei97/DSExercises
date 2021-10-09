// 20: https://leetcode-cn.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let map = { '(': ')', '[': ']', '{': '}' }
  for (let x of s) {
    if (x in map) {
      stack.push(map[x]);

    } else if (stack.pop() !== x) {
      return false
    }
  }
  return stack.length === 0
};