/*
    Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

    For example:
    Given binary tree [3,9,20,null,null,15,7],
        3
       / \
      9  20
        /  \
       15   7
    return its zigzag level order traversal as:
    [
      [3],
      [20,9],
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
const zigzagLevelOrder = function(root) {
    const queue = [root];
    let level = 0;
    const res = [];
    let itemsCurrent = 1;
    let itemsNext = 0;

    while (queue.length) {

        const node = queue.shift();
        itemsCurrent--;

        if (!res[level]) res[level] = [];

        if (level % 2 === 0) res[level].push(node.val);
        else res[level].unshift(node.val);


        if (node.left) {
            itemsNext++;
            queue.push(node.left);
        }

        if (node.right) {
            itemsNext++;
            queue.push(node.right);
        }

        if (itemsCurrent === 0) {
            level++;
            itemsCurrent = itemsNext;
            itemsNext = 0;
        }
    }

    return res;
};

console.log(zigzagLevelOrder(root));