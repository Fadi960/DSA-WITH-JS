// Delete a node from the middle of the linked list 

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
  
    deleteMiddle() {
      if (!this.head || !this.head.next) {
        this.head = null;
        return;
      }
  
      let slow = this.head;
      let fast = this.head;
      let prev = null;
  
      while (fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
      }
      prev.next = slow.next;
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
  
  list.deleteMiddle();
  console.log("List after deleting middle node:");
  list.printList();