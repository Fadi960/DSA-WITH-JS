// Find the largest element in the linked list in js

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
  
    findLargest() {
      if (!this.head) {
        return null; 
      }
  
      let largest = this.head.data;
      let current = this.head.next;
  
      while (current) {
        if (current.data > largest) {
          largest = current.data;
        }
        current = current.next;
      }
  
      return largest;
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
  
  list.addNode(12);
  list.addNode(5);
  list.addNode(23);
  list.addNode(7);
  list.addNode(18);
  
  console.log("Linked List:");
  list.display();
  
  const largest = list.findLargest();
  console.log("Largest element:", largest);