// Difficulty: Medium
//
// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and
// nums[i] < nums[j] < nums[k]. If no such indices exists, return false.
//
// Constraints:
// 1 <= nums.length <= 5 * 10^5
// -2^31 <= nums[i] <= 2^31 - 1
//
// Follow up: Could you implement a solution that runs in O(n) time complexity and O(1) space complexity?
//
// plan: iterate through the array and keep track of the minimum and middle element, if the current element is greater than the middle element, return true
// time complexity: O(n)
// space complexity: O(1)
// tags: Array
/**
 * @param {number[]} nums
 * @return {boolean}
 */
export function increasingTriplet(nums: number[]): boolean {
  if (nums.length < 3) return false;
  let min = nums[0];
  let mid = Number.MAX_VALUE;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= min) {
      min = nums[i];
    } else if (nums[i] <= mid) {
      mid = nums[i];
    } else if (nums[i] > mid) {
      return true;
    }
  }
  return false;
}

/*
Example 1:
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.

Example 2:
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.

Example 3:
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.
*/
