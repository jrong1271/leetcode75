export function isHappy(n: number): boolean {
  const seem = new Set();
  while (n !== 1) {
    if (seem.has(n)) {
      return false;
    }
    seem.add(n);
    n = String(n)
      .split("")
      .map((x) => Number(x))
      .reduce((acc, num) => acc + num * num, 0);
  }
  return true;
}
