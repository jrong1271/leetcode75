import { ListNode } from "../../types/ListNode";

export function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  if (!head || left === right) return head;
  const dummy = new ListNode(0, head);
  let prev = dummy;
  // 1, 2, 3, 4, 5 (swap 2-4)
  for (let i = 1; i < left; i++) {
    prev = prev.next;
  }
  // prev stops at 1

  const current = prev.next;
  // current has 2

  let next = null;

  for (let i = 0; i < right - left && current.next; i++) {
    next = current.next; // set next pointer to 3 // 4

    current.next = next.next; // point 2 to 4 // 2 to 5
    next.next = prev.next; // point 3 to 2 // 4 to 3

    prev.next = next; // reconnect, point 1 to 3 // 1 to 4
  }
  // expecting 1, 3, 2, 4, 5 // 1, 4, 3, 2, 5

  return dummy.next;
}
