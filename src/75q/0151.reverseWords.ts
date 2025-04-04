// Difficulty: Easy
// Related topics: String
// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:
// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
// Example 4:
// Input: s = "  Bob    Loves  Alice   "
// Output: "Alice Loves Bob"
// Example 5:
// Input: s = "Alice does not even like bob"
// Output: "bob like even not does Alice"
// Constraints:
// 1 <= s.length <= 104
// s contains English letters (upper-case and lower-case), digits, and spaces ' '.
// There is at least one word in s.
// Plan: iterate through the string and add the words to the result array, then join the array with a space
// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {string} s
 * @return {string}
 */

export function reverseWords(s: string): string {
  const ans: string[] = [];
  const n = s.length;
  for (let i = 0, j = 0; i < n; ++i) {
    while (s[i] == " " && i < n) {
      i++;
    }
    if (i == n) break;
    j = i;
    while (s[j] !== " " && j < n) {
      j++;
    }
    const w = s.slice(i, j);
    ans.unshift(w);
    i = j;
  }
  return ans.join(" ");
}
