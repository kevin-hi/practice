function Node(data) {
    this.data = data;
    this.next = null;
}

class SinglyList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return !!this.head.data;
    }

    push(data) {
        const oldFirst = this.head;
        const newFirst = new Node(data);
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
newSinglyList.push(6);
newSinglyList.push(9);

console.log(newSinglyList);

newSinglyList.pop();
newSinglyList.pop();

console.log(newSinglyList);
