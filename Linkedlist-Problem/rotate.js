// Rotate a linked list 

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
  
    rotate(k) {
      if (!this.head || !this.head.next || k === 0) {
        return; 
      }
  
      // Find the length of the list and the last node
      let length = 1;
      let current = this.head;
      while (current.next) {
        length++;
        current = current.next;
      }
      let lastNode = current;
  
      // Adjust k if it's larger than the length of the list
      k = k % length;
      if (k === 0) return; 
  
      // Find the new last node (length - k - 1 steps from the head)
      let newLastNode = this.head;
      for (let i = 0; i < length - k - 1; i++) {
        newLastNode = newLastNode.next;
      }
  
      // Perform the rotation
      lastNode.next = this.head; 
      this.head = newLastNode.next; 
      newLastNode.next = null; 
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
  
  list.rotate(2);
  console.log("List after rotating by 2 positions:");
  list.printList();