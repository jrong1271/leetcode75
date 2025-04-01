import { describe, it, expect } from "vitest";

import { swapPairs } from "../src/exercise/e1.swapPairs";
import { createList } from "../src/types/ListNode";

describe("swapPairs", () => {
  it("should swap every two adjacent nodes in the linked list", () => {
    // Test case 1: 1 -> 2 -> 3 -> 4
    const list1 = createList([1, 2, 3, 4]);
    const result1 = swapPairs(list1);
    expect(result1).toEqual(createList([2, 1, 4, 3]));

    // Test case 2: 1 -> 2 -> 3
    const list2 = createList([1, 2, 3]);
    const result2 = swapPairs(list2);
    expect(result2).toEqual(createList([2, 1, 3]));

    // Test case 3: Empty list
    const list3 = createList([]);
    const result3 = swapPairs(list3);
    expect(result3).toEqual(createList([]));

    // Test case 4: Single node
    const list4 = createList([1]);
    const result4 = swapPairs(list4);
    expect(result4).toEqual(createList([1]));
  });
});

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
