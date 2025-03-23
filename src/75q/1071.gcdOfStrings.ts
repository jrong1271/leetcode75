// Difficulty: Easy
// Related topics: Math, String
// tags: String
// For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)
// Return the largest string X such that X divides str1 and X divides str2.
// Example 1:
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
// Note:
// 1 <= str1.length <= 1000
// 1 <= str2.length <= 1000
// str1[i] and str2[i] are English uppercase letters.
// Plan: if str1 + str2 is not equal to str2 + str1, return empty string, otherwise return the substring of str1 from 0 to the gcd of str1.length and str2.length
// Time complexity: O(n)
// Space complexity: O(1)
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
export function gcdOfStrings(str1: string, str2: string): string {
  // determine if there's common divisor
  if (str1 + str2 !== str2 + str1) return "";

  return str1.substring(0, gcd(str1.length, str2.length));
}

function gcd(x: number, y: number): number {
  // use bigger number to divide smaller until no remainder, if remainder found, use smaller number to divide remainder
  if (x % y === 0) {
    return y;
  } else {
    return gcd(y, x % y);
  }
}
