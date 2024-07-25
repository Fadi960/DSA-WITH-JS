// return the address of the previous node in a linked list?

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
  
    getPrevious(targetData) {
      if (!this.head || !this.head.next) {
        return null; 
      }
  
      let current = this.head;
      while (current.next) {
        if (current.next.data === targetData) {
          return current; 
        }
        current = current.next;
      }
  
      return null; 
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
  
  const targetData = 4;
  const previousNode = list.getPrevious(targetData);
  
  if (previousNode) {
    console.log(`Previous node of ${targetData} has data:`, previousNode.data);
  } else {
    console.log(`No previous node found for ${targetData}`);
  }