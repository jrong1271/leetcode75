export function threeSum(nums: number[]): number[][] {
  const ans: number[][] = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2 && nums[i] <= 0; i++) {
    // advance if the current number is the same as the previous one
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    // two pointers, to get the sum of the other two numbers
    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i];
      if (sum === 0) {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return ans;
}
