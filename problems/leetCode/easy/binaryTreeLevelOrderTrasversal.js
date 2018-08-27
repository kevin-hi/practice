/*
    Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

    For example:
    Given binary tree [3,9,20,null,null,15,7],
        3
       / \
      9  20
        /  \
       15   7
    return its level order traversal as:
    [
      [3],
      [9,20],
      [15,7]
    ]
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    const res = [];

    function add(node, index){
        if(node){
            //Ensure array exists
            res[index] = res[index] || [];
            res[index].push(node.val);

            //Recursively push a node and its level
            add(node.left, index + 1);
            add(node.right, index + 1);
        }
    }

    add(root, 0);

    return res;
};