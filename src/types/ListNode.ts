export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
export const createList = (arr: number[]): ListNode | null => {
  let head: ListNode | null = null;
  let current: ListNode | null = null;
  for (const val of arr) {
    const newNode = new ListNode(val);
    if (!head) {
      head = newNode;
      current = newNode;
    } else {
      if (current) {
        current.next = newNode;
        current = newNode;
      }
    }
  }
  return head;
};
