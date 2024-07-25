// check whether a linked list is a circular linked list or not

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
  
    isCircular() {
      if (!this.head) {
        return false; 
      }
  
      let slow = this.head;
      let fast = this.head;
  
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
  
        if (slow === fast) {
          return true; 
        }
      }

      return false;
    }

    makeCircular() {
      if (!this.head) return;
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = this.head; 
    }
  }
  
  const list = new LinkedList();
  
  list.addNode(1);
  list.addNode(2);
  list.addNode(3);
  list.addNode(4);
  
  console.log("Is the list circular? ", list.isCircular());
  
  list.makeCircular();
  console.log("After making the list circular");
  console.log("Is the list circular now? ", list.isCircular());