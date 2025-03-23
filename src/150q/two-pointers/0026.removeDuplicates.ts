export function removeDuplicates(nums: number[]): number {
  const map = new Map<number, number>();
  let k = 0;
  for (const i of nums) {
    if (!map.get(i)) {
      nums[k++] = i;
    }
    map.set(i, 1);
  }
  return k;
}
