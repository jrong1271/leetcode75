/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
*/
export function maxVowels(s: string, k: number): number {
  let ans: number = 0;
  let counter: number = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < k; i++) {
    counter += +vowels.has(s[i]);
  }
  ans = counter;

  for (let i = k; i < s.length; i++) {
    counter += +vowels.has(s[i]) - +vowels.has(s[i - k]);
    ans = Math.max(counter, ans);
  }

  return ans;
}
