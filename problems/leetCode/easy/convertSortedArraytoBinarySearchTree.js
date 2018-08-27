/*
    Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

    For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

    Example:

    Given the sorted array: [-10,-3,0,5,9],

    One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

          0
         / \
       -3   9
       /   /
     -10  5
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBSTFirstAttempt = function(nums) {
    if (!nums.length) return [];
    const bst = new TreeNode();

    function add(val) {
        if (val === undefined) return false;
        console.log('adding ', val);
        const node = new TreeNode(val);
        if (bst.val === undefined) {
            //console.log('setting %s as root ', val);
            bst.val = val;
        } else {
            let current = bst;
            while (current) {
                if (val > current.val) {
                    //console.log(`val ${val} greater than current ${current.val}`);
                    if (!current.right) {
                        //console.log(`no right node setting ${val} as right node after ${current.val}`);
                        current.right = node;
                        break;
                    }
                    current = current.right;
                } else {
                    //console.log(`val ${val} less than current ${current.val}`);
                    if (!current.left) {
                        // console.log(`no left node setting ${val} as left node after ${current.val}`);
                        current.left = node;
                        break;
                    }
                    current = current.left;
                }
            }
        }
    }

    const bstOrder = [];

    function split(low, high) {
        if (low > high) return;
        const mid = Math.floor((low + high)/2);
        bstOrder.push(mid);
        split(low, mid - 1);
        split(mid + 1, high);
        return bstOrder;
    }

    split(0, nums.length);

    for (let i = 0; i < bstOrder.length; i++) {
        add(nums[bstOrder[i]])
    }

    return bst;
};



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param nums
 * @param start
 * @param end
 * @returns {*}
 */
var sortedArrayToBST = function(nums, start = 0, end = nums.length - 1) {
    if (end < start) return;

    const middleIndex = Math.floor((start + end) / 2);
    const node = new TreeNode(nums[middleIndex]);

    node.left = sortedArrayToBST(nums, start, middleIndex - 1);
    node.right = sortedArrayToBST(nums, middleIndex + 1, end);

    return node;
};

//Utility functions
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function getHeight(node) {
    if(!node) return 0;
    const left = getHeight(node.left);
    const right = getHeight(node.right);
    return Math.max(left, right) + 1;
}


// console.log(sortedArrayToBST([-10,-3,0,5,9]));

const sorted = sortedArrayToBST([0,1,2,3,4,5]);
console.log(sorted);
console.log(getHeight(sorted));
