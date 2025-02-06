export function gcdOfStrings(str1: string, str2: string): string {
  // determine if there's common divisor
  if (str1 + str2 !== str2 + str1) return "";

  return str1.substring(0, gcd(str1.length, str2.length));
}

function gcd(x: number, y: number): number {
  // use bigger number to divide smaller until no remainder, if remainder found, use smaller number to divide remainder
  if (x % y === 0) {
    return y;
  } else {
    return gcd(y, x % y);
  }
}
