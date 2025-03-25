// Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
export function trap(height: number[]): number {
  let water: number = 0;
  const n: number = height.length;

  const lw = new Array(n).fill(height[0]);
  const rw = new Array(n).fill(height[n - 1]);

  for (let i = 1; i < n; i++) {
    lw[i] = Math.max(lw[i - 1], height[i]);
    rw[n - i - 1] = Math.max(rw[n - i], height[n - i - 1]);
  }

  for (let i = 1; i < n; i++) {
    water += Math.min(lw[i], rw[i]) - height[i];
  }

  return water;
}
// Time complexity: O(n)
// Space complexity: O(n)
