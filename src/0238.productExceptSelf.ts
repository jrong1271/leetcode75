export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length; // 1,2,3,4
  const ans: number[] = new Array(n);
  for (let i = 0, productOfLeftNums = 1; i < n; i++) {
    ans[i] = productOfLeftNums;
    productOfLeftNums *= nums[i]; // ans will be 1,1,2,6
  }
  for (let i = n - 1, productOfRightNums = 1; i >= 0; i--) {
    ans[i] *= productOfRightNums;
    productOfRightNums *= nums[i]; //ans will be 24,12,8,6
  }
  return ans;
}
