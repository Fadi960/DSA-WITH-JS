// Add a node at the front of the double-linked list

class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
    
    addFront(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }

    display() {
      let current = this.head;
      let result = [];
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      console.log(result.join(' <-> '));
    }
  }
  
  const list = new DoublyLinkedList();
  
  list.addFront(3);
  list.addFront(2);
  list.addFront(1);
  
  console.log("List after adding nodes at the front:");
  list.display();