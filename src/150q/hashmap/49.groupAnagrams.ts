export function groupAnagrams(strs: string[]): string[][] {
  let n = strs.length;
  const map = new Map();
  while (n--) {
    const id = strs[n].split("").sort().join("");

    if (!map.has(id)) {
      map.set(id, []);
    }
    map.get(id).push(strs[n]);
  }
  return Array.from(map.values());
}
