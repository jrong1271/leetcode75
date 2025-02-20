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
