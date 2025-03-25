// Difficulty: Medium
// Related topics: Array
// description: Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// tags: Array
// constraints:
// 2 <= nums.length <= 10^5
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// plan: iterate through the array and calculate the product of the left elements, then iterate through the array again and calculate the product of the right elements
// time complexity: O(n)
// space complexity: O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
export function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const ans: number[] = new Array(n);
  let [productOfLeftNums, productOfRightNums] = [1, 1];
  for (let i = 0; i < n; i++) {
    ans[i] = productOfLeftNums;
    productOfLeftNums *= nums[i];
  }
  // [1, 2, 3, 4] - > [1, 1, 2, 6]

  for (let j = n - 1; j >= 0; j--) {
    ans[j] *= productOfRightNums;
    productOfRightNums *= nums[j];
  }
  // r begins as 24 * 1 <- 12 * 2 <- 4 * 3 <- 1 * 4

  //should be [24, 12, 8, 6]
  return ans;
}
