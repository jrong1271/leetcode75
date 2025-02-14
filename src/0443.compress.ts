export function compress(chars: string[]): number {
  const len = chars.length;
  let left = 0;
  let index = 0;
  while (left < len) {
    let right = left;
    while (right < len && chars[right] === chars[left]) {
      right++;
    }
    const distance = right - left;
    chars[index] = chars[left];
    index++;
    if (distance > 1) {
      for (const c of distance.toString()) {
        chars[index] = c;
        index++;
      }
    }

    left = right;
  }

  return index;
}

/*
Input: chars = ["a","a","b","b","c","c","c"]
Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
*/
