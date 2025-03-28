// [1,2,3,4,5,6,7]
// [1,1,2,3,5,8,13]
/*
Problem: Find the nth Fibonacci number where:
F(n) = F(n-1) + F(n-2)
with base cases F(0) = 0, F(1) = 1
*/
export function fib(n: number): number {
  if (n <= 1) return n;

  const dp = new Array(n + 1);

  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; ++i) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

// only store two variables needed, resulting in O(1)
export function fib2(n: number): number {
  let [p2, p1, current] = [0, 1, 0];

  if (n <= 1) return n;
  for (let i = 2; i <= n; ++i) {
    current = p2 + p1;
    p2 = p1;
    p1 = current;
  }

  return current;
}
