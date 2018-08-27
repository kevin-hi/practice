/*
    Given a binary tree, find its maximum depth.

    The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

    Note: A leaf is a node with no children.

    Example:

    Given binary tree [3,9,20,null,null,15,7],

        3
       / \
      9  20
        /  \
       15   7
    return its depth = 3.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {object} root
 * @return {number}
 */
var maxDepth = function(node) {
    //Base node has no value
    if (!node) return 0;
    //Recursively call on one side of a node and obtain the maximum of its either left or right side
    const left = maxDepth(node.left);
    const right = maxDepth(node.right);
    return Math.max(left, right) + 1;
};
