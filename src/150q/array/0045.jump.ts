export function jump(nums: number[]): number {
  let [ans, mx, last] = [0, 0, 0];
  for (let i = 0; i < nums.length - 1; ++i) {
    mx = Math.max(mx, i + nums[i]);
    // expect(jump([2, 3, 1, 1, 4])).toBe(2);
    if (last === i) {
      // when i = 0, and i = 2
      ++ans;
      last = mx;
    }
  }
  return ans;
}
