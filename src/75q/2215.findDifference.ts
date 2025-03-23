/*
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

Note that the integers in the lists may be returned in any order.
*/

export function findDifference(nums1: number[], nums2: number[]): number[][] {
  const a = new Set(nums1);
  const b = new Set(nums2);

  for (const num of nums2) {
    a.delete(num);
  }
  for (const num of nums1) {
    b.delete(num);
  }
  return [Array.from(a), Array.from(b)];
}
