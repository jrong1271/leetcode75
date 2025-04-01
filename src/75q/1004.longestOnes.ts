/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
*/
export function longestOnes(nums: number[], k: number): number {
  let [left, zeroCounter, maxWidth] = [0, 0, 0];

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCounter++;
    }

    while (zeroCounter > k) {
      if (nums[left] === 0) {
        zeroCounter--;
      }
      left++;
    }

    maxWidth = Math.max(maxWidth, right - left + 1);
  }
  return maxWidth;
}
