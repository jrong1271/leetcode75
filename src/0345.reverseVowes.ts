export function reverseVowels(s: string): string {
  const vowels = "aeiouAEIOU";
  let left = 0;
  let right = s.length - 1;
  const arr = s.split("");

  while (left < right) {
    if (!vowels.includes(arr[left])) {
      left++;
    } else if (!vowels.includes(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
}
