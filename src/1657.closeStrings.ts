/*
Given two strings word1 and word2, return true if word1 and word2 are close, otherwise return false.

Two strings word1 and word2 are considered close if the following conditions are all met:

1. They have the same length.
2. Each pair of corresponding characters in word1 and word2 have the same frequency.

Example 1:
Input: word1 = "abc", word2 = "bca"
Output: true

The frequency of each character in word1 is close (absolute difference <= 0.5) to the corresponding character in word2.
*/

export function closeStrings(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) {
    return false;
  }
  const [f1, f2] = [new Map<string, number>(), new Map<string, number>()];

  for (const c of word1) f1.set(c, (f1.get(c) || 0) + 1);
  for (const c of word2) f2.set(c, (f2.get(c) || 0) + 1);

  if ([...f1.keys()].sort().join() !== [...f2.keys()].sort().join()) {
    return false;
  }

  return [...f1.values()].sort().join("") === [...f2.values()].sort().join("");
}
