/*
Given a 0-indexed integer array nums, find the pivot index of this array.

The pivot index is the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, return -1.
*/
export function pivotIndex(nums: number[]): number {
  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b);

  for (let i = 0; i < nums.length; ++i) {
    rightSum -= nums[i];
    if (rightSum == leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
}
