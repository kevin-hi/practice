function Node(val) {
    this.val = val;
    this.next = null;
}

class SinglyList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return !!this.head.val;
    }

    push(val) {
        const oldFirst = this.head;
        const newFirst = new Node(val);
        newFirst.next = oldFirst;
        this.head = newFirst;
    }

    pop() {
        const oldFirst = this.head;
        this.head = this.head.next;
        return oldFirst;
    }

}


const newSinglyList = new SinglyList();

newSinglyList.push(5);
newSinglyList.push(4);
newSinglyList.push(3);
newSinglyList.push(2);
newSinglyList.push(1);

console.log(newSinglyList);

const reverseList = head => {
    if (head === null) return null;

    let prev = null;
    let next = null;

    while (head) {
        //Keep a reference for current next node in un-reversed order
        next = head.next;
        //Now set current head's next value to be what got us here, for head its null, for previous, its the next
        head.next = prev;
        //Set current to be the previous, thus future nodes know the previous one is
        prev = head;
        //Set head to equal the pointer we set aside earlier
        head = next;
    }

    return prev;

};

console.log(reverseList(newSinglyList.head));

