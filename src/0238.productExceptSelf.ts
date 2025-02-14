export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const ans: number[] = new Array(n);
  for (let i = 0, productOfLeftNums = 1; i < n; i++) {
    ans[i] = productOfLeftNums;
    productOfLeftNums *= nums[i];
  }

  for (let j = n - 1, productOfRightNums = 1; j >= 0; j--) {
    ans[j] *= productOfRightNums;
    productOfRightNums *= nums[j];
  }

  return ans;
}
