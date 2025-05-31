function diagonalDifference(matrix) {
  let d1 = 0, d2 = 0;
  for (let i = 0; i < matrix.length; i++) {
    d1 += matrix[i][i];
    d2 += matrix[i][matrix.length - 1 - i];
  }
  return Math.abs(d1 - d2);
}

const Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(diagonalDifference(Matrix)); 
