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
