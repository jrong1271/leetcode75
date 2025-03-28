import { describe, it, expect } from "vitest";

import { summaryRanges } from "../src/150q";
describe("summaryRanges", () => {
  it("summary ranges of [0,2,3,4,6,8,9] should return ['0','2->4','6','8->9']", () => {
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual([
      "0",
      "2->4",
      "6",
      "8->9",
    ]);
  });
});

import {
  canJump,
  removeElement,
  removeDuplicates,
  removeDuplicatesII,
  jump,
  lengthOfLastWord,
  majorityElement,
  maxProfit,
  maxProfitII,
  merge,
  rotate,
  trap,
} from "../src/150q";
describe("lengthOfLastWord", () => {
  it("length of last word of 'Hello World' should return 5", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });
  it("length of last word of ' ' should return 0", () => {
    expect(lengthOfLastWord(" ")).toBe(0);
  });
  it("length of last word of 'a ' should return 1", () => {
    expect(lengthOfLastWord("a ")).toBe(1);
  });
});
describe("removeDuplicates", () => {
  it("remove duplicates from sorted array [1,1,2] should return 2", () => {
    const nums = [1, 1, 2];
    expect(removeDuplicates(nums)).toBe(2);
    expect(nums).toEqual([1, 2, 2]);
  });
});

describe("removeElement", () => {
  it("remove 3 from [3,2,2,3] should return 2", () => {
    const nums = [3, 2, 2, 3];
    expect(removeElement(nums, 3)).toBe(2);
    expect(nums).toEqual([2, 2, 2, 3]);
  });
});

describe("removeDuplicatesII", () => {
  it("remove duplicates II from [1,1,1,2,2,3] should return 5", () => {
    const nums = [1, 1, 1, 2, 2, 3];
    expect(removeDuplicatesII(nums)).toBe(5);
    expect(nums).toEqual([1, 1, 2, 2, 3, 3]);
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
  it("merge [1,0] and [2] should return [1,2]", () => {
    const nums1 = [1, 0];
    merge(nums1, 1, [2], 1);
    expect(nums1).toEqual([1, 2]);
  });
});
describe("majorityElement", () => {
  it("majority element of [3,2,3] should return 3", () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
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

describe("canJump", () => {
  it("can jump [2,3,1,1,4] should return true", () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true);
  });

  it("can jump [3,2,1,0,4] should return false", () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false);
  });
});

describe("jump", () => {
  it("jump [2,3,1,1,4] should return 2", () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
  });
});

describe("trap", () => {
  it("trap [0,1,0,2,1,0,1,3,2,1,2,1] should return 6", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });
});

// two pointers
import { isPalindrome, twoSum, threeSum } from "../src/150q";

// sliding window
import { lengthOfLongestSubstring } from "../src/150q";

describe("threeSum", () => {
  it("three sum of [-1,0,1,2,-1,-4] should return [[-1,-1,2],[-1,0,1]]", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
    expect(threeSum([-2, 0, 1, 1, 2, 2])).toEqual([
      [-2, 0, 2],
      [-2, 1, 1],
    ]);
    expect(threeSum([1, 1, -2, 1, 1])).toEqual([[-2, 1, 1]]);
  });
});
describe("twoSum", () => {
  it("two sum of [2,7,11,15] should return [1,2]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });
  it("two sum of [2,3,4] should return [1,3]", () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });
  it("two sum of [-1,0] should return [1,2]", () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });
  it("two sum of [5,25,75] should return [2,3]", () => {
    expect(twoSum([5, 25, 75], 100)).toEqual([2, 3]);
  });
});

describe("isPalindrome", () => {
  it("axxxabc should return false", () => {
    expect(isPalindrome("axxxabc")).toBe(false);
    expect(isPalindrome("!abccba!")).toBe(true);
  });
});

describe("length of longest substring", () => {
  it("axxxabc should return 4", () => {
    expect(lengthOfLongestSubstring("axxxabc")).toBe(4);
  });
});
