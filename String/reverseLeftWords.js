// 58: https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/

var reverseLeftWords = function (s, n) {
  const strArr = Array.from(s)
  reverse(strArr, 0, n - 1)
  reverse(strArr, n, strArr.length - 1)
  reverse(strArr, 0, strArr.length - 1)
  return strArr.join('')
}

function reverse (strArr, i, j) {
  while (i < j) {
    [strArr[i], strArr[j]] = [strArr[j], strArr[i]]
    i++;
    j--;
  }
}