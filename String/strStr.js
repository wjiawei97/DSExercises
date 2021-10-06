// 28: https://leetcode-cn.com/problems/implement-strstr/

var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  const getNext = (needle) => {
    let next = [];
    // 1. initialize
    let j = 0;
    next[0] = j;
    for (let i = 1; i < needle.length; i++) {
      // 2. handle the situation of different prefixes & suffixes
      while (j > 0 && needle[i] !== needle[j]) {
        j = next[j - 1];
      }
      // 2. handle the situation of the same prefixes & suffixes
      if (needle[i] === needle[j]) {
        j++;
      }
      // 3. update the next array
      next[i] = j;
    }
    return next;
  }

  let next = getNext(needle);
  let j = 0
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === needle.length) {
      return (i - j + 1);
    }
  }
  return -1;
}

