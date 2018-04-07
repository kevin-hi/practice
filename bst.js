'use strict';


function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = new Node(data);
        if (!this.root) {
            this.root = node;
        } else {

            let current = this.root;

            while (current) {

                if (node.data > current.data) {
                    if (!current.right) {
                        current.right = node;
                        break;
                    }
                    current = current.right;
                } else if (node.data < current.data) {
                    if (!current.left) {
                        current.left = node;
                        break;
                    }
                    current = current.left;
                } else {
                    break;
                }

            }
        }
    }

    remove(data) {
        if (this.root.data === data) {
            this.root.data = null;
        }

        let parent = null;
        let current = this.root;

        while (current) {
            if (current.data === data) {
                let parentDirection = parent.left.data === current.data ? 'left' : 'right';

                //if no child, delete node from parent reference
                if (!current.left && !current.right) {
                    parent[parentDirection] = null;
                    break;
                }

                //if single child, connect child to new parent
                if (!current.left) {
                    parent[parentDirection] = current.right;
                    break;
                }

                if (!current.right) {
                    parent[parentDirection] = current.left;
                    break;
                }

                //if two child, find smallest child in right subtree (eg: bigger than original node's left side but smaller than all right side)
                //set the value of current node to be the smallest child
                //recursively use remove to delete that child, it has at most 1 right child
                if (current.left && current.right) {
                    const smallestChildInLeft = this.getMin(current.right);
                    this.remove(smallestChildInLeft.data);
                    current.data = smallestChildInLeft.data;
                }
                break;
            }
            parent = current;
            current = data > current.data ? current.right : current.left;
        }
    }

    contains(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) return true;
            current = data > current.data ? current.right : current.left;
        }
        return false;
    }

    dfs() {
        console.log('\n\n\nPRE-ORDER');
        this.preOrder(this.root);
        console.log('\n\n\nPOST-ORDER');
        this.postOrder(this.root);
        console.log('\n\n\nIN-ORDER');
        this.inOrder(this.root);
    }

    bfs() {

    }

    preOrder(node) {
        if (node) {
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node) {
        if (node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.data);
        }
    }

    inOrder(node) {
        if (node) {
            this.inOrder(node.left);
            console.log(node.data);
            this.inOrder(node.right);
        }
    }


    getMin(node) {
        if (!node) node = this.root;
        while (node.left) node = node.left;
        return node;
    }

    getMax() {

    }

    getHeight() {

    }

    isBalanced() {

    }


}



const BST = new Tree();


// function generateUniqueSet(max = 10) {
//     const uniqueSet = new Set();
//     while (uniqueSet.size < max) {
//         uniqueSet.add(Math.floor(Math.random() * 15) + 1);
//     }
//     return uniqueSet;
// }
//
//
// const set = generateUniqueSet(8);
// console.log(set);
// console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
// set.forEach(item => BST.add(item));


BST.add(20);
BST.add(10);
BST.add(5);
BST.add(15);
BST.add(12);
BST.add(30);
BST.add(25);

BST.remove(12);

// console.log(BST.contains(4));

BST.dfs();
