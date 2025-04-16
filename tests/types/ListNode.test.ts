import { describe, it, expect } from "vitest";
import { ListNode, createList, printList } from "../../src/types/ListNode";

describe("ListNode", () => {
  it("should create a linked list from an array", () => {
    const arr = [1, 2, 3];
    const list = createList(arr);
    expect(list?.val).toBe(1);
    expect(list?.next?.val).toBe(2);
    expect(list?.next?.next?.val).toBe(3);
    expect(list?.next?.next?.next).toBeNull();
  });
});