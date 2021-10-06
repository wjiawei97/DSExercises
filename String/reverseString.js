// 541: https://leetcode-cn.com/problems/reverse-string-ii/

var reverseStr = function (s, k) {
  let resArr = s.split('');
  for (let i = 0; i < resArr.length; i += 2 * k) {
    if (i + k <= resArr.length) {
      reverse(resArr, i, i + k - 1);
      continue;
    }
    reverse(resArr, i, resArr.length - 1)
  }
  console.log(resArr);
}
var reverse = function (s, i, j) {
  while (i++ <= j--) {
    [s[i], s[j]] = [s[j], s[i]]
  }
}