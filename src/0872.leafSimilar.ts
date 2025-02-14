export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function leafSimilar(root1: TreeNode, root2: TreeNode): boolean {
  const findLeafs = (root: TreeNode, list: number[]) => {
    if (root.left === null && root.right === null) {
      list.push(root.val);
      return;
    }
    if (root.left !== null) {
      findLeafs(root.left, list);
    }
    if (root.right !== null) {
      findLeafs(root.right, list);
    }
  };
  const l1: number[] = [];
  const l2: number[] = [];
  findLeafs(root1, l1);
  findLeafs(root2, l2);
  return l1.join(",") === l2.join(",");
}
