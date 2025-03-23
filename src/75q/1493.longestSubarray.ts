/*
Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the array.

Return 0 if the array contains no 1's.
*/
export function longestSubarray(nums: number[]): number {
  let [l, c, longest] = [0, 0, 0];
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] == 0) {
      c++;
    }
    while (c > 1) {
      if (nums[l] == 0) {
        c--;
      }
      l++;
    }
    longest = Math.max(longest, r - l);
  }
  return longest;
}
