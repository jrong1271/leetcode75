// Difficulty: Easy
// Related topics: Array, Two Pointers
//
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]
// Constraints:
// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
// Follow up: Could you minimize the total number of operations done?
// Plan: iterate through the array and swap the current element with the first zero element
// Time complexity: O(n)
// Space complexity: O(1)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export function moveZeroes(nums: number[]): void {
  let k = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i]) {
      if (i !== k) [nums[i], nums[k]] = [nums[k], nums[i]];
      k++;
    }
  }
}
