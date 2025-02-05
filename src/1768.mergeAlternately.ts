export function mergeAlternately(word1: string, word2: string): string {
  let steps;
  const result: string[] = word1.split("");
  if (word1.length > word2.length) {
    steps = word2.length;
  } else {
    steps = word1.length;
  }
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
