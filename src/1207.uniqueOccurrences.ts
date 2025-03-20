/*
 * Given an array of integers arr, return true if and only if the number of occurrences of each element is unique.
 *
 * Example 1:
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The numbers 1, 2, and 3 occur 2, 2, and 1 times respectively.
 * Example 2:
 * Input: arr = [1,2]
 * Output: false
 * Example 3:
 * Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
 * Output: true
 */
export function uniqueOccurrences(arr: number[]): boolean {
  const countMap = new Map<number, number>();
  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  const uniqueCountSet = new Set<number>(countMap.values());
  return uniqueCountSet.size === countMap.size;
}
