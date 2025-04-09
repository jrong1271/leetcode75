export function rotateMatrix(matrix: number[][]): void {
  const n = matrix.length;

  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Swap elements across the diagonal
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
    // [0,1]=[1,0] -> [0,2]=[2,0] -> [0,3]=[3,0]
    // [1,2]=[2,1] -> [1,3]=[3,1]
    // [2,3]=[3,2]
  }

  // Step 2: Reverse each row
  for (const row of matrix) {
    row.reverse();
  }
}
