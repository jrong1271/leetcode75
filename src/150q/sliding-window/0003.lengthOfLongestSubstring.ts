export function lengthOfLongestSubstring(s: string): number {
  let [l, max] = [0, 0];
  const map = new Map<string, number>();

  for (let r = 0; r < s.length; r++) {
    const c = s[r];
    map.set(c, (map.get(c) || 0) + 1);
    while (map.get(c) > 1) {
      map.set(s[l], map.get(s[l]) - 1);
      l++;
    }
    max = Math.max(max, r - l + 1);
  }
  return max;
}
