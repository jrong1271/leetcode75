import { describe, it, expect } from "vitest";
import { largestSquare } from "../src/exercise/e2.largestSquare";
describe("find largest square", () => {
  it("take 2d array of 1/0 and find the largest square consist of all 1", () => {
    expect(
      largestSquare([
        [1, 0, 1, 0, 0],
        [1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0],
      ]),
    ).toEqual(4);
    expect(
      largestSquare([
        [0, 1],
        [1, 0],
      ]),
    ).toEqual(1);
  });
});

import { fib, fib2 } from "./../src/exercise/e1.fibonacci";
describe("fib", () => {
  it("take a number and return its fibonacci value", () => {
    expect(fib(1)).toEqual(1);
    expect(fib(3)).toEqual(2);
    expect(fib(4)).toEqual(3);
    expect(fib(5)).toEqual(5);

    expect(fib2(1)).toEqual(1);
    expect(fib2(3)).toEqual(2);
    expect(fib2(4)).toEqual(3);
    expect(fib2(5)).toEqual(5);
  });
});
