const { SinglyLinkedNode } = require("./singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        };
        this.length++;
        return this.length;

        // Write your hypothesis on the time complexity of this method here
        // O(1);
    }

    dequeue() {
        if (!this.length) return null;
        const removed = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        };
        if (this.length > 1) this.head = this.head.next;
        this.length--;
        return removed.value;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

}

module.exports = Queue;
