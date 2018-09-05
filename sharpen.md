## Binary Search Tree

### find
```javascript
const find = val => {
    let current = this.root;
    
    while (current) {
    if (val === current.val) return true;
        current = val > current.val ? current.right : current.left;
    }
    return false;
};
```

### getHeight
```javascript
const getHeight = node => {
    if(!node) return 0;
    
    const left = getHeight(node.left);
    const right = getHeight(node.right);
    
    return Math.max(left, right) + 1;
};
```

### isBalanced
```javascript
const isBalanced = (node ) => {
    if (node === null) return true;
    
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    
    return (Math.abs(leftHeight - rightHeight) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right))
};
```

### isSame
```javascript
const isSameTree = (p, q) => {
    
    if (p === null || q === null) return p === q;
    if (p.val !== q.val) return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);    
};

```

### lowestCommonAncestor
```javascript
const lowestCommonAncestor = (node, p, q) =>{
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (!left) return right;
    if (!right) return left;
       
    return root;
};
```

### breathFirstSearchLevels
```javascript
const breathFirstSearchLevels = (node) => {
    const queue = [node];
    let level = 0;
    let currentLevelItems = 1;
    let nextLevelItems = 0;

    while(queue.length) {
        const node = queue.shift();
        currentLevelItems--;

        if (node.left) {
            queue.push(node.left);
            nextLevelItems++;
        }
        if (node.right) {
            queue.push(node.right);
            nextLevelItems++;
        }
        if (currentLevelItems === 0) {
            level++;
            currentLevelItems = nextLevelItems;
            nextLevelItems = 0;
        }
    }
};
```

## Linked List

### Reverse Linked List
```javascript
const reverseList = head => {
    if (head === null) return null;

    let prev = null;
    let next = null;

    while (head) {
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
};

```

