export function removeElement(nums: number[], val: number): number {
  // Input: nums = [3,2,2,3], val = 3
  // Output: 2, nums = [2,2,_,_]
  let k = 0;
  for (const num of nums) {
    if (num !== val) {
      nums[k++] = num;
    }
  }
  return k;
}
