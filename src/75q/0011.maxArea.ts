// Difficulty: Medium
// Related topics: Array, Two Pointers
// tags: Array
// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
// Notice that you may not slant the container.
// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:
// Input: height = [1,1]
// Output: 1
// Example 3:
// Input: height = [4,3,2,1,4]
// Output: 16
// Example 4:
// Input: height = [1,2,1]
// Output: 2
// Constraints:
// n == height.length
// 2 <= n <= 3 * 104
// 0 <= height[i] <= 3 * 104
// Plan: Use two pointers to solve this problem
// The area is determined by the shorter line and the distance between the two lines
// Time complexity: O(n)
// Space complexity: O(1)
/**
 * @param {number[]} height
 * @return {number}
 */

export function maxArea(height: number[]): number {
  let [l, r] = [0, height.length - 1];
  let ans = 0;
  while (l < r) {
    ans = Math.max(ans, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return ans;
}
