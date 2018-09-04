## BST

### getHeight
```javascript
const getHeight = node => {
    if(!node) return 0;
    const left = getHeight(node.left);
    const right = getHeight(node.right);
    return Math.max(left, right) + 1;
}
```

### isBalanced
```javascript
 const isBalanced = (node ) => {
    if (node === null) return true;
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    return (Math.abs(leftHeight - rightHeight) <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right))
}
```

### isSame
```javascript
const isSameTree = (p, q) => {
    if (p === null || q === null) return p === q;
    if (p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);    
}

```

### lowestCommonAncestor
```javascript
const lowestCommonAncestor = (node, p, q) =>{
    if (node.val > p && node.val > q) return this.lowestCommonAncestor(node.left, p, q);
    if (node.val < p && node.val < q) return this.lowestCommonAncestor(node.right, p, q);
    
    return node;
}
```

### bfs
```javascript
const bfs = (node) => {
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
}
```