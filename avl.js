function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.parent = null;
}

class AVLTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(data, rebalance = false) {
        const node = new Node(data);
        if (this.root === null) {
            this.root = node;
            this.size++;
            return;
        }
        this._add(this.root, node, rebalance);
    }

    _add(parent, newNode, rebalance) {
        //Find most optimal location to insert node
        if (newNode.data > parent.data) {
            if (!parent.right) {
                newNode.parent = parent;
                parent.right = newNode;
                this.size++;
            } else {
                this._add(parent.right, newNode);
            }
        } else {
            if (!parent.left) {
                newNode.parent = parent;
                parent.left = newNode;
                this.size++;
            } else {
                this._add(parent.left, newNode);
            }
        }

        //Check balance after inserting
        if (rebalance) {
            this.checkBalance(newNode);
        }
    }

    checkBalance(node) {
        //If difference between the node's left and right are greater than 1, rebalance
        if (Math.abs(this.getHeight(node.left) - this.getHeight(node.right)) > 1) {
            this.rebalance(node);
        }

        //If this is the root node returns and stops recursively checking for balance
        if (!node.parent) {
            return;
        }

        //Else recursively check its parent until root
        this.checkBalance(node.parent);
    }

    getHeight(node) {
        if(!node) return -1;
        const left = this.getHeight(node.left);
        const right = this.getHeight(node.right);
        return Math.max(left, right) + 1;
    }

    rebalance(node) {
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);

        //If left subtree's height is greater than right subtree's height by 1
        if (leftHeight - rightHeight > 1) {
            //If node's left left is greater than left right
            if(this.getHeight(node.left.left) > this.getHeight(node.left.right)) {
                node = this.rightRotate(node);
            } else {
                node = this.leftRightRotate(node);
            }
        } else {
            if (this.getHeight(node.right.left) > this.getHeight(node.right.right)) {
                node = this.rightLeftRotate(node);
            } else {
                node = this.leftRotate(node);
            }
        }
        if (!node.parent) {
            this.root = node;
        }
    }

    rightRotate(node) {
        //Set left as temporary return
        const temp = node.left;

        temp.parent = node.parent;
        node.parent = temp;
        if(temp.right) temp.right.parent = node;

        //Current node's left will be the largest of the left subtree, which is temp's right
        node.left = temp.right;
        //Temp right is now the parent and thus the previous node rotated to the right is now temp's right
        temp.right = node;
        return temp;
    }

    leftRotate(node) {
        const temp = node.right;

        temp.parent = node.parent;
        node.parent = temp;

        if (temp.left) temp.left.parent = node;

        node.right = temp.left;
        temp.left = node;
        return temp;
    }

    rightLeftRotate(node) {
        node.right = this.rightRotate(node.right);
        return this.leftRotate(node);
    }

    leftRightRotate(node) {
        node.left = this.leftRotate(node.left);
        return this.rightRotate(node);

    }

    bfs() {
        const queue = [];
        queue.push(this.root);
        while(queue.length) {
            const node = queue.shift();
            console.log(node.data);
            console.log(this.parentCheck(node));

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    parentCheck(node) {
        if (node && node.left) {
            if (node === node.left.parent) {
                return true;
            } else {
                return node;
            }
        }

        if (node && node.right) {
            if(node === node.right.parent) {
                return true;
            } else {
                return node;
            }
        }
    }
}

const avlTree = new AVLTree();



//Right rotate
// avlTree.add(43);
// avlTree.add(11);
// avlTree.add(8);
// avlTree.add(27);
// avlTree.add(65);
// avlTree.add(3, true);

//Left rotate
// avlTree.add(43);
// avlTree.add(21);
// avlTree.add(65);
// avlTree.add(51);
// avlTree.add(87);
// avlTree.add(73, true);

//Left right rotate
avlTree.add(43);
avlTree.add(11);
avlTree.add(8);
avlTree.add(27);
avlTree.add(31);
avlTree.add(65, true);

//Right left rotate
// avlTree.add(24);
// avlTree.add(11);
// avlTree.add(55);
// avlTree.add(31);
// avlTree.add(68);
// avlTree.add(47, true);

avlTree.bfs();