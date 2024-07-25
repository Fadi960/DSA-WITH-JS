// delete the first node

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
  
    deleteFirst() {
      if (!this.head) {
        return null; 
      }
  
      const removedNode = this.head;
      this.head = this.head.next;
      removedNode.next = null; 
  
      return removedNode.data;
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
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  

  const list = new LinkedList();
  list.insertAtEnd(1);
  list.insertAtEnd(2);
  list.insertAtEnd(3);
  
  console.log("Original list:");
  list.printList();
  
  const removedData = list.deleteFirst();
  console.log("Removed node data:", removedData);
  
  console.log("List after deleting first node:");
  list.printList(); 