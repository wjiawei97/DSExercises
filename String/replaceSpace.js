// 5: https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/

// i: point to the end position of the old array
// j: point to the end position of the new array
var replaceSpace = function (s) {
  let arr = s.split('')
  let spaceNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      spaceNum++
    }
  }

  let i = arr.length - 1, j = arr.length - 1 + spaceNum * 2;
  for (; i >= 0; i--, j--) {
    if (arr[i] === ' ') {
      arr[j--] = '0'
      arr[j--] = '2'
      arr[j] = '%'
    } else {
      arr[j] = arr[i]
    }
  }
  return arr.join('')
}


var replaceSpace = function (s) {
  let arr = s.split('')
  let spaceNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ' ') {
      spaceNum++
    }
  }
  let i = arr.length - 1, j = arr.length - 1 + spaceNum * 2;
  while (i >= 0) {
    if (arr[i] === ' ') {
      arr[j--] = '0'
      arr[j--] = '2'
      arr[j--] = '%'
      i--
    } else {
      arr[j--] = arr[i--]
    }
  }
  return arr.join('')
}