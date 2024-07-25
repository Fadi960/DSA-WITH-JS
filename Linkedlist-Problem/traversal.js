// Traversal of linked list

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    add(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    traverse() {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  const list = new LinkedList();
  list.add(1);
  list.add(2);
  list.add(3);
  list.add(4);
  
  list.traverse();
  