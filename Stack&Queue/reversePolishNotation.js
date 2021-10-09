// 150: https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  const map = new Map([
    ["+", (a, b) => a * 1 + b * 1],
    ['-', (a, b) => b - a],
    ['*', (a, b) => a * b],
    ['/', (a, b) => (b / a) | 0],
  ])
  for (let x of tokens) {
    if (!map.has(x)) {
      stack.push(x);
      continue;
    }
    stack.push(map.get(x)(stack.pop(), stack.pop()))
  }
  return stack.pop();
};