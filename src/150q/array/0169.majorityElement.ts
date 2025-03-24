export function majorityElement(nums: number[]): number {
  let m = 0;
  let cnt = 0;

  for (const x of nums) {
    if (!cnt) {
      m = x;
      cnt = 1;
    } else {
      cnt += x == m ? 1 : -1;
    }
  }
  return m;
}
