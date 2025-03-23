import { describe, it, expect } from "vitest";

import {
  removeElement,
  merge,
  lengthOfLongestSubstring,
  removeDuplicates,
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
