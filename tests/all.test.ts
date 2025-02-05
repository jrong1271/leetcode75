import { describe, it, expect } from "vitest";

import { mergeAlternately } from "../src/1768.mergeAlternately";

describe("mergeAlternately", () => {
  it("given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.", () => {
    expect(mergeAlternately("abc", "pqr")).toEqual("apbqcr");
    expect(mergeAlternately("ab", "pqrs")).toEqual("apbqrs");
    expect(mergeAlternately("abcd", "pq")).toEqual("apbqcd");
  });
});
