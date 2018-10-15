function flatArrayIterative(input) {
    const stack = [...input];
    const res = [];
    while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        if (Array.isArray(next)) {
            // push back array items, won't modify the original input
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    return res.reverse();
}

function flatArrayRecursive(input) {
    const flat = [];

    input.forEach(item => {
        if (Array.isArray(item)) {
            flat.push(...flatArrayRecursive(item));
        } else {
            flat.push(item);
        }
    });

    return flat;
}
