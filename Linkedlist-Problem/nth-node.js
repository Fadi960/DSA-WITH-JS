// Find the nth node from the end of the linked list.

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
  
    findNthFromEnd(n) {
      if (!this.head || n <= 0) {
        return null;
      }
  
      let first = this.head;
      let second = this.head;
  
      for (let i = 0; i < n; i++) {
        if (!first) {
          return null; 
        }
        first = first.next;
      }
  
      while (first) {
        first = first.next;
        second = second.next;
      }
  
      return second;
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
  
  console.log("List:");
  list.printList();
  
  const n = 2; 
  const nthNode = list.findNthFromEnd(n);
  
  if (nthNode) {
    console.log(`${n}th node from the end has data:`, nthNode.data);
  } else {
    console.log(`No ${n}th node from the end found`);
  }