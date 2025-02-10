// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);
        if (this.head) newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    removeFromHead() {
        let removed = this.head;

        if (!this.length) return undefined
        if (!this.head.next) {
            this.head = null;
        }
        else this.head = this.head.next;
        this.length--;
        return removed;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    removeFromTail() {
        let removed;

        if (!this.length) return undefined;
        if (this.length === 1) {
            removed = this.head;
            this.head = null;
        }
        else {
            let curr = this.head;
            while (curr.next.next) {
                curr = curr.next;

            };
            removed = curr.next;
            curr.next = null;
        }
        this.length--;
        return removed

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }

    peekAtHead() {
        if (!this.length) return;
        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // O(1)
    }

    print() {
        if (this.length) {
            let curr = this.head;

            while (curr) {
                console.log(curr.value);
                curr = curr.next;
            }
        }

        // Write your hypothesis on the time complexity of this method here
        // O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
