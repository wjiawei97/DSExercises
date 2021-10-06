// 459: https://leetcode-cn.com/problems/repeated-substring-pattern/

var repeatedSubstringPattern = function (s) {
  const getNext = (s) => {
    let j = 0;
    let next = [];
    next[0] = j;
    for (let i = 1; i < s.length; i++) {
      while (j > 0 && s[i] != s[j]) {
        j = next[j - 1];
      }
      if (s[i] === s[j]) {
        j++;
      }
      next[i] = j;
    }
    return next;
  }
  let next = getNext(s)
  if (next[s.length - 1] !== 0 && s.length % (s.length - next[s.length - 1]) !== 0) {
    return true;
  }
  return false;
};