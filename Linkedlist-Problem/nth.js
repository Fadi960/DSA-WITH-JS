// Find the nth element from m nodes of the linked list

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
  
    findNthFromM(n, m) {
      if (!this.head) {
        return null;
      }
  
      if (n <= 0 || m <= 0) {
        return null;
      }
  
      let current = this.head;
      let count = 1;
  
      while (count < m && current) {
        current = current.next;
        count++;
      }
  
      if (!current) {
        return null;
      }
  
      for (let i = 1; i < n && current; i++) {
        current = current.next;
      }
  
      if (!current) {
        return null;
      }
  
      return current.data;
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
  list.addNode(6);
  list.addNode(7);
  
  console.log("Linked List:");
  list.display();
  
  const m = 3; 
  const n = 2; 
  
  const result = list.findNthFromM(n, m);
  if (result !== null) {
    console.log(`The ${n}th element from ${m} nodes is:`, result);
  } else {
    console.log("Element not found");
  }