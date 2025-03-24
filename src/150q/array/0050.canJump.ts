export function canJump(nums: number[]): boolean {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    // max is (prev index + value of prev index) || earlier max, when max less than i return false
    // meaning highest index reached is less than current index
    if (i > max) {
      return false;
    }
    max = Math.max(max, i + nums[i]);
  }
  return true;
}
