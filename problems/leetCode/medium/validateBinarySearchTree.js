/*
    Given a binary tree, determine if it is a valid binary search tree (BST).

    Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.
    Example 1:

    Input:
        2
       / \
      1   3
    Output: true
    Example 2:

        5
       / \
      1   4
         / \
        3   6
    Output: false
    Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
                 is 5 but its right child's value i
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Convert BST to inOrder DFS array
 * * Check base cases
 * * Check if array is in increasing order
 * * Does not contain duplicates
 * @param {TreeNode} root
 * @return {boolean}
 */


var isValidBST = function(root) {
    //Check base cases
    if (!root) return true;
    if (!root.left && !root.right) return true;

    const dfsOut = [];

    //Convert BST to in order DFS array
    function dfs(node) {
        if (node) {
            dfs(node.left);
            dfsOut.push(node.val);
            dfs(node.right);
        }
    }

    dfs(root);

    for (let i = 0; i < dfsOut.length; i++) {
        //Be aware of -1 being a value here for JS truthy check
        if (dfsOut[i - 1] !== null) {
            //Check if array does not contain duplicates
            if (dfsOut[i] === dfsOut[i - 1]) return false;
            //Check if array is in ascending order
            if (dfsOut[i] < dfsOut[i - 1]) return false;
        }
    }
    return true;
};

