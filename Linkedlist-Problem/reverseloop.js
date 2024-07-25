// Reverse a linked list in a single loop

class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addNode(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
    }
  
    display() {
      let current = this.head;
      let result = [];
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      console.log(result.join(' -> '));
    }
  }
  
  const list = new LinkedList();
  
  list.addNode(1);
  list.addNode(2);
  list.addNode(3);
  list.addNode(4);
  list.addNode(5);
  
  console.log("Original Linked List:");
  list.display();
  
  list.reverse();
  
  console.log("Reversed Linked List:");
  list.display();