// Difficulty: Easy
// Related topics: Array, Greedy
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.
// Constraints:
// 1 <= flowerbed.length <= 2 * 10^4
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length
// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
// Plan: add 0 at the beginning and end of flowerbed, then check if the current position and the next position are 0, then set the current position to 1 and reduce n by 1, finally return n <= 0
// Time complexity: O(n)
// Space complexity: O(1)
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  flowerbed.push(0);
  flowerbed.unshift(0);
  for (let i = 1; i < flowerbed.length; i++) {
    if (
      flowerbed[i - 1] === 0 &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      flowerbed[i] = 1;
      n--;
    }
  }
  return n <= 0;
}
