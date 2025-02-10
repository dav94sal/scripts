// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
            // console.log(`Head: ${this.head.value}`);
            // console.log(`Tail: ${this.tail.prev.value}`);
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        const newNode =new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        };
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        let removed;

        if (this.length) {
            removed = this.head.value;
            this.head = this.head.next;
            this.length--;
            if (this.head) this.head.prev = null;
        }
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        let removed;

        if (this.length) {
            removed = this.tail.value;
            this.tail = this.tail.prev;
            this.length--;
            if (this.length) this.tail.next = null;

        }

        return removed;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        let head;

        if (this.head) head = this.head.value;
        return head;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    peekAtTail() {
        let tail;

        if (this.head) tail = this.tail.value;

        return tail;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
