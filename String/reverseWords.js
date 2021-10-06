// 151: https://leetcode-cn.com/problems/reverse-words-in-a-string/

var reverseWords = function (s) {
  const strArr = Array.from(s)
  removeExtraSpaces(strArr)
  reverse(strArr, 0, strArr.length - 1);
  let i = 0;
  for (let j = 0; j <= strArr.length; j++) {
    if (strArr[j] === ' ' || j === strArr.length) {
      reverse(strArr, i, j - 1)
      i = j + 1
    }
  }
  return strArr.join('')
}

function removeExtraSpaces (strArr) {
  let slow = 0, fast = 0;
  while (fast < strArr.length) {
    if (strArr[fast] === ' ' && (fast === 0 || strArr[fast - 1] === ' ')) {
      fast++;
    } else {
      strArr[slow++] = strArr[fast++]
    }
  }
  strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow
}
function reverse (strArr, i, j) {
  while (i < j) {
    [strArr[i], strArr[j]] = [strArr[j], strArr[i]]
    i++;
    j--;
  }
}