// Difficulty: Easy
// Related topics: Two Pointers, String
// tags: Array
// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false
// Constraints:
// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.
// Follow up: If there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
// Plan: iterate through the string and remove the first character of s if it is found in t
// Time complexity: O(n)
// Space complexity: O(1)
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export function isSubsequence(s: string, t: string): boolean {
  let i: number = 0;
  while (i < t.length && s.length !== 0) {
    if (s[0] === t[i]) {
      s = s.slice(1);
    }
    i++;
  }
  return s.length == 0;
}
