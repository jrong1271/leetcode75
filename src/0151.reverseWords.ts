export function reverseWords(s: string): string {
  let i = 0;
  const result: string[] = [];
  while (i < s.length) {
    if (s[i] === " ") {
      i++;
      continue;
    }
    let j = i;
    while (j < s.length && s[j] !== " ") {
      j++;
    }
    result.push(s.slice(i, j));
    i = j;
  }
  return result.reverse().join(" ");
}
