export function isPalindrome(s: string): boolean {
  let [i, j] = [0, s.length - 1];
  while (i < j) {
    if (!/[a-zA-Z0-9]/.test(s[i])) {
      i++;
    } else if (!/[a-zA-Z0-9]/.test(s[j])) {
      j--;
    } else if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
}
