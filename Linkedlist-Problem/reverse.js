// Reverse a linked list

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
  
    insertAtEnd(data) {
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
  
    printList() {
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
  list.insertAtEnd(1);
  list.insertAtEnd(2);
  list.insertAtEnd(3);
  list.insertAtEnd(4);
  list.insertAtEnd(5);
  
  console.log("Original list:");
  list.printList();
  
  list.reverse();
  console.log("Reversed list:");
  list.printList();