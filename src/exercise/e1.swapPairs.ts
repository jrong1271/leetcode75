/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
import { ListNode } from "../types/ListNode";
export function swapPairs(head: ListNode | null): ListNode | null {
  const fakeHead = new ListNode(0, head); // pointing to the head

  let curr = fakeHead; // this is the node before the first pair we want to swap

  while (curr.next && curr.next.next) {
    // check if there are at least two nodes to swap
    const first = curr.next,
      second = curr.next.next,
      third = curr.next.next.next;

    // Perform the swap
    curr.next = second;
    second.next = first;

    // Now, point first to the node after second
    first.next = third; // when third is null, we reach the end of the list

    curr = first; // after first iteration, first's next and nextNext is {3, 4}
  }
  return fakeHead.next; // this is pointing the third node
}
