import { describe, it, expect } from "vitest";

import {
  removeElement,
  merge,
  lengthOfLongestSubstring,
  removeDuplicates,
  removeDuplicatesII,
  majorityElement,
  rotate,
  maxProfit,
  maxProfitII,
} from "../src/150q";

describe("removeDuplicates", () => {
  it("remove duplicates from [1,1,2] should return 2", () => {
    const nums = [1, 1, 2];
    expect(removeDuplicates(nums)).toBe(2);
    expect(nums).toEqual([1, 2, 2]);
  });

  it("remove duplicates from [0,0,1,1,1,2,2,3,3,4] should return 5", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicates(nums)).toBe(5);
    expect(nums).toEqual([0, 1, 2, 3, 4, 2, 2, 3, 3, 4]);
  });
});

describe("removeElement", () => {
  it("remove 3 from [3,2,2,3] should return 2", () => {
    const nums = [3, 2, 2, 3];
    expect(removeElement(nums, 3)).toBe(2);
    expect(nums).toEqual([2, 2, 2, 3]);
  });

  it("remove 2 from [0,1,2,2,3,0,4,2] should return 5", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    expect(removeElement(nums, 2)).toBe(5);
    expect(nums).toEqual([0, 1, 3, 0, 4, 0, 4, 2]);
  });
});

describe("merge sorted array", () => {
  it("merge [1,2,3,0,0,0] and [2,5,6] should return [1,2,2,3,5,6]", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("merge [1] and [] should return [1]", () => {
    const nums1 = [1];
    merge(nums1, 1, [], 0);
    expect(nums1).toEqual([1]);
  });

  it("merge [0] and [1] should return [1]", () => {
    const nums1 = [0];
    merge(nums1, 0, [1], 1);
    expect(nums1).toEqual([1]);
  });

  it("merge [1,2,3,0,0,0] and [4,5,6] should return [1,2,3,4,5,6]", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [4, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("length of logest substring", () => {
  it("axxxabc should return 4", () => {
    expect(lengthOfLongestSubstring("axxxabc")).toBe(4);
  });
  it("abcabcbb should return 3", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });

  it("bbbbb should return 1", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });

  it("pwwkew should return 3", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  it("'' should return 0", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });
});
describe("removeDuplicatesII", () => {
  it("remove duplicates from [1,1,1,2,2,3] should return 5", () => {
    const nums = [1, 1, 1, 2, 2, 3];
    expect(removeDuplicatesII(nums)).toBe(5);
    expect(nums).toEqual([1, 1, 2, 2, 3, 3]);
  });
});

describe("majorityElement", () => {
  it("majority element of [3,2,3] should return 3", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });
});

describe("rotate", () => {
  it("rotate [1,2,3,4,5,6,7] by 3 should return [5,6,7,1,2,3,4]", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    rotate(nums, 3);
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("rotate [-1,-100,3,99] by 2 should return [3,99,-1,-100]", () => {
    const nums = [-1, -100, 3, 99];
    rotate(nums, 2);
    expect(nums).toEqual([3, 99, -1, -100]);
  });
});

describe("maxProfit", () => {
  it("max profit of [7,1,5,3,6,4] should return 5", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });

  it("max profit of [7,6,4,3,1] should return 0", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
});

describe("maxProfitII", () => {
  it("max profit of [7,1,5,3,6,4] should return 7", () => {
    expect(maxProfitII([7, 1, 5, 3, 6, 4])).toBe(7);
  });

  it("max profit of [1,2,3,4,5] should return 4", () => {
    expect(maxProfitII([1, 2, 3, 4, 5])).toBe(4);
  });

  it("max profit of [7,6,4,3,1] should return 0", () => {
    expect(maxProfitII([7, 6, 4, 3, 1])).toBe(0);
  });
});
