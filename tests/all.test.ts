import { describe, it, expect } from "vitest";

import { mergeAlternately } from "../src/1768.mergeAlternately";
import { gcdOfStrings } from "../src/1071.gcdOfStrings";
import { kidsWithCandies } from "../src/1431.kidsWithCandies";
import { canPlaceFlowers } from "../src/0605.canPlaceFlowers";
import { reverseVowels } from "../src/0345.reverseVowes";
import { reverseWords } from "../src/0151.reverseWords";
import { productExceptSelf } from "../src/0238.productExceptSelf";
import { increasingTriplet } from "../src/334.increasingTriplet";

import { compress } from "../src/0443.compress";
import { moveZeroes } from "../src/0283.moveZeroes";

describe("moveZeroes", () => {
  it("Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.", () => {
    // const nums = [0, 1, 0, 3, 12];
    // moveZeroes(nums);
    // expect(nums).toEqual([1, 3, 12, 0, 0]);

    // const nums2 = [0]; // edge case
    // moveZeroes(nums2);
    // expect(nums2).toEqual([0]);

    // const nums3 = [1, 0]; // edge case 2
    // moveZeroes(nums3);
    // expect(nums3).toEqual([1, 0]);

    // const num4 = [2, 1]; // edge case 3
    // moveZeroes(num4);
    // expect(num4).toEqual([2, 1]);

    // const num5 = [1, 0, 1]; // edge case 4
    // moveZeroes(num5);
    // expect(num5).toEqual([1, 1, 0]);

    // const num6 = [1, 0, 0]; // edge case 5
    // moveZeroes(num6);
    // expect(num6).toEqual([1, 0, 0]);

    const num7 = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0]; // edge case 6
    moveZeroes(num7);
    expect(num7).toEqual([4, 2, 4, 3, 5, 1, 0, 0, 0, 0]);
  });
});

describe("compress", () => {
  it("Given a character array chars, compress it using the following algorithm:", () => {
    expect(compress(["a", "a", "b", "b", "c", "c", "c"])).toEqual(6);
    expect(compress(["a"])).toEqual(1);
    expect(compress(["a", "b"])).toEqual(2);
  });
});

describe("increasingTriplet", () => {
  it("Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.", () => {
    expect(increasingTriplet([1, 2, 3, 4, 5])).toBeTruthy();
    expect(increasingTriplet([5, 4, 3, 2, 1])).toBeFalsy();
    expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBeTruthy();
    expect(increasingTriplet([1, 2])).toBeFalsy();
    expect(increasingTriplet([20, 100, 10, 12, 5, 13])).toBeTruthy();

    // Additional test cases
    expect(increasingTriplet([0.5, 1.5, 2.5])).toBeTruthy();
  });
});
describe("productExceptSelf", () => {
  it("Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([-0, 0, 9, -0, 0]);
  });
});

describe("reverseWords", () => {
  it("Given an input string s, reverse the order of the words.", () => {
    expect(reverseWords("the sky is blue")).toEqual("blue is sky the");
    expect(reverseWords("  hello world  ")).toEqual("world hello");
    expect(reverseWords("a good   example")).toEqual("example good a");
  });
});

describe("reverseVowels", () => {
  it("Given a string s, reverse only all the vowels in the string and return it.", () => {
    expect(reverseVowels("hello")).toEqual("holle");
    expect(reverseVowels("leetcode")).toEqual("leotcede");
    expect(reverseVowels("aA")).toEqual("Aa");
  });
});

describe("canPlaceFlowers", () => {
  it("Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty.", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBeTruthy();
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBeFalsy();
    expect(canPlaceFlowers([0, 0, 1, 0, 1], 1)).toBeTruthy();
    expect(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)).toBeTruthy();
    expect(canPlaceFlowers([0], 1)).toBeTruthy();
    expect(canPlaceFlowers([0, 0, 0], 2)).toBeTruthy();
    expect(canPlaceFlowers([0, 0, 0, 0, 1], 2)).toBeTruthy();
    expect(canPlaceFlowers([0, 0], 1)).toBeTruthy();
  });
});

describe("kidsWithCandies", () => {
  it("Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.", () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([
      true,
      true,
      true,
      false,
      true,
    ]);
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([
      true,
      false,
      false,
      false,
      false,
    ]);
    expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
  });
});

describe("gcdOfStrings", () => {
  it("Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.", () => {
    expect(gcdOfStrings("ABCABC", "ABC")).toEqual("ABC");
    expect(gcdOfStrings("ABABAB", "ABAB")).toEqual("AB");
    expect(gcdOfStrings("LEET", "CODE")).toEqual("");
  });
});

describe("mergeAlternately", () => {
  it("given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.", () => {
    expect(mergeAlternately("abc", "pqr")).toEqual("apbqcr");
    expect(mergeAlternately("ab", "pqrs")).toEqual("apbqrs");
    expect(mergeAlternately("abcd", "pq")).toEqual("apbqcd");
  });
});
