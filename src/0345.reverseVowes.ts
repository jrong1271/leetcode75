// Difficulty: Easy
// Related topics: Two Pointers, String
//
// Write a function that takes a string as input and reverse only the vowels of a string.
//
// Example 1:
// Input: "hello"
// Output: "holle"
//
// Example 2:
// Input: "leetcode"
// Output: "leotcede"
//
// Note:
// The vowels does not include the letter "y".
//
// Constraints:
// 1 <= s.length <= 10^5
//
// Plan: use two pointers to swap the vowels in the string
// Time complexity: O(n)
// Space complexity: O(n)

/**
 * @param {string} s
 * @return {string}
 */
export function reverseVowels(s: string): string {
  const vowels = "aeiouAEIOU";
  let left = 0;
  let right = s.length - 1;
  const arr = s.split("");

  while (left < right) {
    if (!vowels.includes(arr[left])) {
      left++;
    } else if (!vowels.includes(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
}
