import { ListNode } from "../../types/ListNode";

export function removeNthFromEnd(
  head: ListNode | null,
  n: number,
): ListNode | null {
  const fakeHead = new ListNode(0, head);
  let slow = fakeHead,
    fast = fakeHead;

  while (n--) {
    fast = fast.next;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return fakeHead.next;
}
