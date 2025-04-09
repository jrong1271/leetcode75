import { describe, it, expect } from "vitest";

import { rotateMatrix } from "../src/150q/matrix/0048.rotate";
describe("rotate", () => {
  it("rotateMatrix [[1,2,3],[4,5,6],[7,8,9]] should return [[7,4,1],[8,5,2],[9,6,3]]", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    rotateMatrix(matrix);
    expect(matrix).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });
});

import { groupAnagrams, isHappy } from "../src/150q";

describe("isHappy", () => {
  it("isHappy(19) should return true", () => {
    expect(isHappy(19)).toBe(true);
  });
  it("isHappy(2) should return false", () => {
    expect(isHappy(2)).toBe(false);
  });
});

describe("groupAnagrams", () => {
  it("groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']) should return [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["bat"],
      ["nat", "tan"],
      ["ate", "tea", "eat"],
    ]);
  });
});

import { removeNthFromEnd, reverseBetween } from "../src/150q";
import { createList } from "../src/types/ListNode";

describe("reverseBetween", () => {
  const testCases = [
    {
      input: { head: createList([1, 2, 3, 4, 5]), left: 2, right: 4 },
      expected: createList([1, 4, 3, 2, 5]),
    },
    {
      input: { head: createList([1]), left: 1, right: 1 },
      expected: createList([1]),
    },
    {
      input: { head: createList([1]), left: 1, right: 2 },
      expected: createList([1]),
    },
    {
      input: { head: createList([1]), left: 0, right: 0 },
      expected: createList([1]),
    },
  ];
  for (const { input, expected } of testCases) {
    it(`reverse between ${input.left} and ${input.right}`, () => {
      const result = reverseBetween(input.head, input.left, input.right);
      expect(result).toEqual(expected);
    });
  }
});
describe("removeNthFromEnd", () => {
  const testCases = [
    {
      input: { head: createList([1, 2, 3, 4, 5]), n: 2 },
      expected: createList([1, 2, 3, 5]),
    },
    {
      input: { head: createList([1, 2]), n: 1 },
      expected: createList([1]),
    },
    {
      input: { head: createList([1, 2]), n: 2 },
      expected: createList([2]),
    },
  ];
  for (const { input, expected } of testCases) {
    it(`remove ${input.n}th from end of list`, () => {
      const result = removeNthFromEnd(input.head, input.n);
      expect(result).toEqual(expected);
    });
  }
});

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
  candy,
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

describe("candy", () => {
  it("candy of [1,0,2] should return 5", () => {
    expect(candy([1, 0, 2])).toBe(5);
  });
  it("candy of [1,2,2] should return 4", () => {
    expect(candy([1, 2, 2])).toBe(4);
  });
  it("candy of [1,3,2,2,1] should return 7", () => {
    expect(candy([1, 3, 2, 2, 1])).toBe(7);
  });
  it("candy of [1,2,3,4,5] should return 15", () => {
    expect(candy([1, 2, 3, 4, 5])).toBe(15);
  });
});

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
// sliding window
import { lengthOfLongestSubstring } from "../src/150q";

describe("length of longest substring", () => {
  it("axxxabc should return 4", () => {
    expect(lengthOfLongestSubstring("axxxabc")).toBe(4);
  });
});
