// Difficulty: Easy
// Related topics: Tree, Depth-first Search
//
// Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
//
// For example, in the given tree
//     3
//    / \
//   5   1
//  / \ / \
// 6  2 9  8
//   / \
//  7   4
// The leaf value sequence is (6, 7, 4, 9, 8).
//
// Two binary trees are considered leaf-similar if their leaf value sequence is the same.
//
// Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
//
// Constraints:
// The number of nodes in each tree will be in the range [1, 200].
// Both of the given trees will have values of nodes in the range [0, 200].
//
// Plan: use dfs to find the leaf values of the trees and compare them
// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
import { TreeNode } from "../types/TreeNode";

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
