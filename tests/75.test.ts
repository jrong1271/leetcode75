import { describe, it, expect } from "vitest";
import { TreeNode } from "../src/types/TreeNode";

import * as Answer75 from "../src/75q";

describe("findDifference", () => {
  it("Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where: ", () => {
    expect(Answer75.findDifference([1, 2, 3], [1, 2, 4])).toEqual([[3], [4]]);
    expect(Answer75.findDifference([1, 2, 3], [4, 5, 6])).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(Answer75.findDifference([1, 2, 3], [1, 2, 3])).toEqual([[], []]);
  });
});

describe("asteroidCollision", () => {
  it("Given an array asteroids of integers representing asteroids in a row, return the number of asteroids that will be left.", () => {
    expect(Answer75.asteroidCollision([5, 10, -5])).toEqual([5, 10]);
    expect(Answer75.asteroidCollision([8, -8])).toEqual([]);
    expect(Answer75.asteroidCollision([10, 2, -5])).toEqual([10]);
    expect(Answer75.asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
  });
});
describe("removeStars", () => {
  it("Given a string s, remove the closest non-star character to its left, as well as remove the star itself.", () => {
    expect(Answer75.removeStars("leet*code")).toBe("leecode");
    expect(Answer75.removeStars("a*b*c*d")).toBe("d");
    expect(Answer75.removeStars("ad*bc*cd")).toBe("abcd");
    expect(Answer75.removeStars("*a*b*c*d")).toBe("d");
    expect(Answer75.removeStars("***")).toBe("");
  });
});

describe("equalPairs", () => {
  it("Given a 2D array grid of integers, return the number of equal pairs that can be formed.", () => {
    expect(
      Answer75.equalPairs([
        [3, 2, 1],
        [1, 7, 6],
        [2, 7, 7],
      ]),
    ).toEqual(1);
    expect(
      Answer75.equalPairs([
        [1, 2],
        [3, 4],
      ]),
    ).toEqual(0);
    expect(
      Answer75.equalPairs([
        [1, 3],
        [2, 3],
      ]),
    ).toEqual(0);
  });
});

describe("closeStrings", () => {
  it("Given two strings word1 and word2, return true if word1 and word2 are close, otherwise return false.", () => {
    expect(Answer75.closeStrings("abc", "bca")).toBeTruthy();
    expect(Answer75.closeStrings("a", "aa")).toBeFalsy();
    expect(Answer75.closeStrings("cabbba", "abbccc")).toBeTruthy();
    expect(Answer75.closeStrings("abbcc", "aaabc")).toBeFalsy();
    expect(Answer75.closeStrings("cabbba", "aabbss")).toBeFalsy();
    expect(Answer75.closeStrings("uau", "ssx")).toBeFalsy();
  });
});

describe("uniqueOccurrences", () => {
  it("Given an array of integers arr, return true if and only if the number of unique elements is equal to the number of occurrences of each element.", () => {
    expect(Answer75.uniqueOccurrences([1, 2, 2, 1, 3, 2])).toBeTruthy();
    expect(Answer75.uniqueOccurrences([1, 2])).toBeFalsy();
    expect(Answer75.uniqueOccurrences([1, 1, 2, 2, 3, 3])).toBeFalsy();
    expect(Answer75.uniqueOccurrences([1])).toBeTruthy();
  });
});

describe("largestAltitude", () => {
  it("Given a gain array, return the highest altitude.", () => {
    expect(Answer75.largestAltitude([-5, 1, 5, 0, -7])).toEqual(1);
    expect(Answer75.largestAltitude([-4, -3, -2, -1, 4, 3, 2])).toEqual(0);
  });
});

describe("pivotIndex", () => {
  it("Given an array of integers nums, calculate the pivot index of this array.", () => {
    expect(Answer75.pivotIndex([1, 7, 3, 6, 5, 6])).toEqual(3);
    expect(Answer75.pivotIndex([1, 2, 3])).toEqual(-1);
    expect(Answer75.pivotIndex([2, 1, -1])).toEqual(0);
  });
});

describe("longestSubarray", () => {
  it("Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.", () => {
    expect(Answer75.longestSubarray([1, 1, 0, 1])).toEqual(3);
    expect(Answer75.longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toEqual(5);
    expect(Answer75.longestSubarray([1, 1, 1])).toEqual(2);
    expect(Answer75.longestSubarray([0, 0, 0])).toEqual(0);
    expect(Answer75.longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1])).toEqual(4);
  });
});

describe("longestOnes", () => {
  it("Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.", () => {
    expect(Answer75.longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toEqual(
      6,
    );
    expect(
      Answer75.longestOnes(
        [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
        3,
      ),
    ).toEqual(10);
  });
});

describe("maxVowels", () => {
  it("Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.", () => {
    expect(Answer75.maxVowels("abciiidef", 3)).toEqual(3);
    expect(Answer75.maxVowels("aeiou", 2)).toEqual(2);
    expect(Answer75.maxVowels("leetcode", 3)).toEqual(2);
    expect(Answer75.maxVowels("rhythm", 3)).toEqual(0);
  });
});

describe("findMaxAverage", () => {
  it("Given an integer array nums consisting of n elements, and an integer k.", () => {
    expect(Answer75.findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75);
    expect(Answer75.findMaxAverage([5], 1)).toEqual(5.0);
    expect(Answer75.findMaxAverage([-1], 1)).toEqual(-1.0);
  });
});

describe("maxOperations", () => {
  it("Given a 0-indexed integer array nums, and an integer k.", () => {
    expect(Answer75.maxOperations([1, 2, 3, 4], 5)).toEqual(2);
    expect(Answer75.maxOperations([3, 1, 3, 4, 3], 6)).toEqual(1);
    expect(
      Answer75.maxOperations(
        [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 3, 2, 2, 3, 2, 4, 2],
        3,
      ),
    ).toEqual(3);
    expect(Answer75.maxOperations([1, 1, 1, 1, 1], 2)).toEqual(2);
  });
});

describe("findCircleNum", () => {
  it("There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.", () => {
    expect(
      Answer75.findCircleNum([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ]),
    ).toEqual(2);
    expect(
      Answer75.findCircleNum([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toEqual(3);
    expect(
      Answer75.findCircleNum([
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
      ]),
    ).toEqual(2);
    expect(
      Answer75.findCircleNum([
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
      ]),
    ).toEqual(1);
    expect(
      Answer75.findCircleNum([
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 1],
        [1, 0, 1, 1],
      ]),
    ).toEqual(1);
    expect(
      Answer75.findCircleNum([
        [1, 1, 0, 0],
        [1, 1, 1, 0],
        [0, 1, 1, 1],
        [0, 0, 1, 1],
      ]),
    ).toEqual(1);
    expect(
      Answer75.findCircleNum([
        [1, 1, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 1, 1],
        [0, 0, 0, 1, 1],
      ]),
    ).toEqual(1);
  });
});

describe("canVisitAllRooms", () => {
  it("You have n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0.", () => {
    expect(Answer75.canVisitAllRooms([[1], [2], [3], []])).toBeTruthy();
    expect(
      Answer75.canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]),
    ).toBeFalsy();
    expect(
      Answer75.canVisitAllRooms([
        [1, 3],
        [3, 0, 1],
        [2],
        [0],
        [5],
        [4],
        [],
        [6],
        [],
        [],
      ]),
    ).toBeFalsy();
  });
});
describe("maxArea", () => {
  it("Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.", () => {
    expect(Answer75.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
    expect(Answer75.maxArea([1, 1])).toEqual(1);
    expect(Answer75.maxArea([4, 3, 2, 1, 4])).toEqual(16);
    expect(Answer75.maxArea([1, 2, 1])).toEqual(2);
  });
});

describe("isSubsequence", () => {
  it("Given two strings s and t, return true if s is a subsequence of t, or false otherwise.", () => {
    expect(Answer75.isSubsequence("abc", "ahbgdc")).toBeTruthy();
    expect(Answer75.isSubsequence("axc", "ahbgdc")).toBeFalsy();
  });
});
describe("leafSimilar", () => {
  it("Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.", () => {
    // Example 1
    const root1 = new TreeNode(
      3,
      new TreeNode(
        5,
        new TreeNode(6),
        new TreeNode(2, new TreeNode(7), new TreeNode(4)),
      ),
      new TreeNode(1, new TreeNode(9), new TreeNode(8)),
    );
    const root2 = new TreeNode(
      3,
      new TreeNode(5, new TreeNode(6), new TreeNode(7)),
      new TreeNode(
        1,
        new TreeNode(4),
        new TreeNode(2, new TreeNode(9), new TreeNode(8)),
      ),
    );
    expect(Answer75.leafSimilar(root1, root2)).toBeTruthy();

    // Example 2
    const root3 = new TreeNode(1);
    const root4 = new TreeNode(1);
    expect(Answer75.leafSimilar(root3, root4)).toBeTruthy();

    // Example 3
    const root5 = new TreeNode(1);
    const root6 = new TreeNode(2);
    expect(Answer75.leafSimilar(root5, root6)).toBeFalsy();

    // Example 4
    const root7 = new TreeNode(1, new TreeNode(2), null);
    const root8 = new TreeNode(2, new TreeNode(2), null);
    expect(Answer75.leafSimilar(root7, root8)).toBeTruthy();

    // Example 5
    const root9 = new TreeNode(1, new TreeNode(2), new TreeNode());
    const root10 = new TreeNode(1, new TreeNode(), new TreeNode(2));
    expect(Answer75.leafSimilar(root9, root10)).toBeFalsy();
  });
});

describe("maxDepth", () => {
  it("Given a binary tree, find its maximum depth.", () => {
    // Example 1
    const root1 = {
      val: 3,
      left: {
        val: 9,
        left: null,
        right: null,
      },
      right: {
        val: 20,
        left: {
          val: 15,
          left: null,
          right: null,
        },
        right: {
          val: 7,
          left: null,
          right: null,
        },
      },
    };
    expect(Answer75.maxDepth(root1)).toEqual(3);

    // Example 2
    const root2 = {
      val: 1,
      left: null,
      right: null,
    };
    expect(Answer75.maxDepth(root2)).toEqual(1);

    // Example 3
    const root3 = null;
    expect(Answer75.maxDepth(root3)).toEqual(0);
  });
});

describe("moveZeroes", () => {
  it("Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.", () => {
    const nums = [1, 1, 0, 3, 12];
    Answer75.moveZeroes(nums);
    expect(nums).toEqual([1, 1, 3, 12, 0]);

    const nums2 = [0]; // edge case
    Answer75.moveZeroes(nums2);
    expect(nums2).toEqual([0]);

    const nums3 = [1, 0]; // edge case 2
    Answer75.moveZeroes(nums3);
    expect(nums3).toEqual([1, 0]);

    const num4 = [2, 1]; // edge case 3
    Answer75.moveZeroes(num4);
    expect(num4).toEqual([2, 1]);

    const num5 = [1, 0, 1]; // edge case 4
    Answer75.moveZeroes(num5);
    expect(num5).toEqual([1, 1, 0]);

    const num6 = [1, 0, 0]; // edge case 5
    Answer75.moveZeroes(num6);
    expect(num6).toEqual([1, 0, 0]);

    const num7 = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0]; // edge case 6
    Answer75.moveZeroes(num7);
    expect(num7).toEqual([4, 2, 4, 3, 5, 1, 0, 0, 0, 0]);
  });
});

describe("compress", () => {
  it("Given a character array chars, compress it using the following algorithm:", () => {
    expect(Answer75.compress(["a", "a", "b", "b", "c", "c", "c"])).toEqual(6);
    expect(Answer75.compress(["a"])).toEqual(1);
    expect(Answer75.compress(["a", "b"])).toEqual(2);
  });
});

describe("increasingTriplet", () => {
  it("Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.", () => {
    expect(Answer75.increasingTriplet([1, 2, 3, 4, 5])).toBeTruthy();
    expect(Answer75.increasingTriplet([5, 4, 3, 2, 1])).toBeFalsy();
    expect(Answer75.increasingTriplet([2, 1, 5, 0, 4, 6])).toBeTruthy();
    expect(Answer75.increasingTriplet([1, 2])).toBeFalsy();
    expect(Answer75.increasingTriplet([20, 100, 10, 12, 5, 13])).toBeTruthy();

    // Additional test cases
    expect(Answer75.increasingTriplet([0.5, 1.5, 2.5])).toBeTruthy();
  });
});
describe("productExceptSelf", () => {
  it("Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].", () => {
    expect(Answer75.productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(Answer75.productExceptSelf([-1, 1, 0, -3, 3])).toEqual([
      -0, 0, 9, -0, 0,
    ]);
  });
});

describe("reverseWords", () => {
  it("Given an input string s, reverse the order of the words.", () => {
    expect(Answer75.reverseWords("the sky is blue")).toEqual("blue is sky the");
    expect(Answer75.reverseWords("  hello world  ")).toEqual("world hello");
    expect(Answer75.reverseWords("a good   example")).toEqual("example good a");
  });
});

describe("reverseVowels", () => {
  it("Given a string s, reverse only all the vowels in the string and return it.", () => {
    expect(Answer75.reverseVowels("hello")).toEqual("holle");
    expect(Answer75.reverseVowels("leetcode")).toEqual("leotcede");
    expect(Answer75.reverseVowels("aA")).toEqual("Aa");
  });
});

describe("canPlaceFlowers", () => {
  it("Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty.", () => {
    expect(Answer75.canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBeTruthy();
    expect(Answer75.canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBeFalsy();
    expect(Answer75.canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBeTruthy();
    expect(Answer75.canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toBeTruthy();
    expect(Answer75.canPlaceFlowers([0], 1)).toBeTruthy();
    expect(Answer75.canPlaceFlowers([0, 0, 0], 2)).toBeTruthy();
    expect(Answer75.canPlaceFlowers([0, 0, 0, 0, 1], 2)).toBeTruthy();
    expect(Answer75.canPlaceFlowers([0, 0], 1)).toBeTruthy();
  });
});

describe("kidsWithCandies", () => {
  it("Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.", () => {
    expect(Answer75.kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
      true,
      true,
      true,
      false,
      true,
    ]);
    expect(Answer75.kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
      true,
      false,
      false,
      false,
      false,
    ]);
    expect(Answer75.kidsWithCandies([12, 1, 12], 10)).toEqual([
      true,
      false,
      true,
    ]);
  });
});

describe("gcdOfStrings", () => {
  it("Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.", () => {
    expect(Answer75.gcdOfStrings("ABCABC", "ABC")).toEqual("ABC");
    expect(Answer75.gcdOfStrings("ABABAB", "ABAB")).toEqual("AB");
    expect(Answer75.gcdOfStrings("LEET", "CODE")).toEqual("");
  });
});

describe("mergeAlternately", () => {
  it("given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.", () => {
    expect(Answer75.mergeAlternately("abc", "pqr")).toEqual("apbqcr");
    expect(Answer75.mergeAlternately("ab", "pqrs")).toEqual("apbqrs");
    expect(Answer75.mergeAlternately("abcd", "pq")).toEqual("apbqcd");
  });
});
