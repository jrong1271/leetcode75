export function lengthOfLastWord(s: string): number {
  let i = s.length - 1;
  let counter = 0;
  while (i >= 0) {
    if (s[i--] !== " ") {
      counter++;
      if (counter && s[i] == " ") {
        break;
      }
    }
  }
  return counter;
}
