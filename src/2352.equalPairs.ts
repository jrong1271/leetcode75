/*
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
*/
export function equalPairs(grid: number[][]): number {
  let ans = 0;
  const n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let found = 1;
      for (let k = 0; k < n; k++) {
        // grid[i][k] 3, 2, 1 -> 1, 7, 6 -> 2, 7, 7
        // grid[k][j] (3, 1, 2) (2, 7, 7) (1, 6, 7)
        const rowSet = grid[i][k];
        const colSet = grid[k][j];
        if (colSet !== rowSet) {
          found = 0;
          break;
        }
      }
      if (found) ans++;
    }
  }
  return ans;
}
