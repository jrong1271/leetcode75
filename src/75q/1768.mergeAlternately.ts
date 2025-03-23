// Difficulty: Easy
//
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
//
// Return the merged string.
//
// Constraints:
// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.
//
// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
//
// Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
//
// Plan: split word1 into an array of characters, then iterate through the array and add the corresponding character from word2 to the current character in word1. If word2 is longer than word1, append the remaining characters from word2 to the end of the merged string. Finally, join the array of characters into a string and return it.
// Time complexity: O(n)
// Space complexity: O(n)
export function mergeAlternately(word1: string, word2: string): string {
  const result: string[] = word1.split("");
  const steps = Math.min(word1.length, word2.length);

  for (let i = 0; i <= steps; i++) {
    if (i < steps) {
      result[i] += word2[i];
    }
    if (i === steps) {
      if (word2.length > steps) {
        result.push(word2.slice(steps));
      }
    }
  }
  return result.join("");
}
