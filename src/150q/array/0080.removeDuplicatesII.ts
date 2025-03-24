export function removeDuplicatesII(nums: number[]): number {
  let k = 0;
  for (const num of nums) {
    if (k < 2 || num !== nums[k - 2]) {
      nums[k++] = num;
    }
  }
  return k;
}
