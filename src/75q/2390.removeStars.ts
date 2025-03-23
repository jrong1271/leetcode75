/*
You are given a string s, which contains stars *.
In one operation, you can:
  Choose a star in s.
  Remove the closest non-star character to its left, as well as remove the star itself.
  Return the string after all stars have been removed.

*/
export function removeStars(s: string): string {
  const ans: string[] = [];

  for (const c of s) {
    if (c === "*") {
      ans.pop();
    } else {
      ans.push(c);
    }
  }
  return ans.join("");
}
