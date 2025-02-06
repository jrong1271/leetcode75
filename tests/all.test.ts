import { describe, it, expect } from "vitest";

import { mergeAlternately } from "../src/1768.mergeAlternately";
import { gcdOfStrings } from "../src/1071.gcdOfStrings";

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
