/*
You are given a 0-indexed integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum is equal to k and remove them from the array.

Return the maximum number of operations you can perform on the array.
*/
export default function maxOperations(nums: number[], k: number): number {
  const map = new Map<number, number>();
  let ans = 0;
  for (const x of nums) {
    if (map.get(k - x)) {
      map.set(k - x, map.get(k - x)! - 1);
      ans++;
    } else {
      map.set(x, (map.get(x) ?? 0) + 1);
    }
  }
  return ans;
}
