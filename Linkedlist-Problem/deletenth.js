// Delete N nodes from a linked list after M nodes.

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
  
    deleteNAfterM(M, N) {
      if (!this.head || M < 0 || N <= 0) {
        return; 
      }
  
      let current = this.head;
      let previous = null;
  
      for (let i = 0; i < M && current; i++) {
        previous = current;
        current = current.next;
      }

      for (let i = 0; i < N && current; i++) {
        current = current.next;
      }
  
      if (previous) {
        previous.next = current;
      } else {
        this.head = current;
      }
  
      if (current) {
        this.deleteNAfterM(M, N);
      }
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
  
  for (let i = 1; i <= 10; i++) {
    list.addNode(i);
  }
  
  console.log("Original Linked List:");
  list.display();
  
  const M = 2; 
  const N = 3; 
  
  list.deleteNAfterM(M, N);
  
  console.log(`Linked List after deleting ${N} nodes after every ${M} nodes:`);
  list.display();