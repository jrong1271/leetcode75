// Difficulty: Easy
// Related topics: Tree, Depth-first Search, Breadth-first Search
//
// Given the root of a binary tree, return its maximum depth.
//
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
//
// Constraints:
// The number of nodes in the tree is in the range [0, 10^4].
// -100 <= Node.val <= 100
//
// Plan: use dfs to find the maximum depth of the tree
// Time complexity: O(n)
// Space complexity: O(n)
// Tags: Tree, Depth-first Search

import { TreeNode } from "../types/TreeNode";
export function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
