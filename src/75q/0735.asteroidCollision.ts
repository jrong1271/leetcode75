/*
You are given an array asteroids of integers representing asteroids in a row.
Each asteroid has a mass, represented by an integer.
Return the array in the order of the asteroids being added. You may modify the given array in-place.
*/
export function asteroidCollision(asteroids: number[]): number[] {
  const stk: number[] = [];
  for (const x of asteroids) {
    if (x > 0) {
      stk.push(x);
    } else {
      // handle negative asteroids going towards the left
      // first, pop out the left-positive asteroids with smaller mass
      while (stk.length && stk.at(-1) > 0 && stk.at(-1) < -x) {
        stk.pop();
      }
      if (stk.length && stk.at(-1) === -x) {
        // trickyly handle the case where the current asteroid has the same mass as the left-positive asteroid
        stk.pop();
      } else if (!stk.length || stk.at(-1) < 0) {
        // if no left-positive asteroids have smaller or equal mass, push the current asteroid into the stack
        stk.push(x);
      }
    }
  }
  return stk;
}
