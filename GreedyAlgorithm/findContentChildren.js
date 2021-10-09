// 455: https://leetcode-cn.com/problems/assign-cookies/

var findContentChildren = function (g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let j = s.length - 1;
  let cnt = 0;
  for (let i = g.length - 1; i >= 0; i--) {
    // choose the biggest biscuit
    if (j >= 0 && s[j] >= g[i]) {
      cnt++;
      j--;
    }
  }
  return cnt;
};