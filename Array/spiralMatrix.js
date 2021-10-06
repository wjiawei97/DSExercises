// 59: https://leetcode-cn.com/problems/spiral-matrix-ii/

var generateMatrix = function (n) {
  let matrix = Array.from({ length: n }).map(item => new Array(n));
  let loop = parseInt(n / 2);
  let startX = startY = 0;
  let number = 1;
  let offset = 1;
  let mid = parseInt(n / 2);
  while (loop--) {
    let i = startX, j = startY;
    for (; j < startY + n - offset; j++) {
      matrix[startX][j] = number++;
    }
    for (; i < startX + n - offset; i++) {
      matrix[i][j] = number++;
    }
    for (; j > startY; j--) {
      matrix[i][j] = number++;
    }
    for (; i > startX; i--) {
      matrix[i][j] = number++;
    }

    offset = offset + 2;
    startX++;
    startY++;
  }
  if (n & 1) {
    matrix[mid][mid] = number;
  }
  return matrix;
}