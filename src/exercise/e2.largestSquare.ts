export function largestSquare(inputArray: number[][]): number {
  const n = inputArray.length;
  const m = inputArray[0].length;
  const dp: number[][] = [...Array(n)].map(() => Array(m).fill(0));

  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 || j == 0) {
        if (inputArray[i][j] == 1) {
          dp[i][j] = 1;
          ans = Math.max(ans, dp[i][j]);
        }
      } else {
        if (inputArray[i][j] == 1) {
          const left = dp[i - 1][j];
          const top = dp[i][j - 1];
          const topLeft = dp[i - 1][j - 1];
          dp[i][j] = Math.min(left, top, topLeft) + 1;
        }
        ans = Math.max(ans, dp[i][j]);
      }
    }
  }
  return ans * ans;
}
