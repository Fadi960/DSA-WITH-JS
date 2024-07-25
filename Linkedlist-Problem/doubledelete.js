// Insert Delete and search in a double and circular linked list

class Node {
    constructor(data) {
      this.data = data;
      this.prev = null;
      this.next = null;
    }
  }
  
  class DoublyCircularLinkedList {
    constructor() {
      this.head = null;
    }
  
    insert(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
        this.head = newNode;
        newNode.next = newNode;
        newNode.prev = newNode;
      } else {
        const last = this.head.prev;
        last.next = newNode;
        newNode.prev = last;
        newNode.next = this.head;
        this.head.prev = newNode;
      }
    }
  
    delete(data) {
      if (!this.head) return;
  
      let current = this.head;
      let found = false;
  
      do {
        if (current.data === data) {
          found = true;
          if (current === this.head && current.next === this.head) {
            this.head = null;
          } else {
            if (current === this.head) {
              this.head = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
          break;
        }
        current = current.next;
      } while (current !== this.head);
  
      if (!found) {
        console.log("Node not found");
      }
    }
  
    search(data) {
      if (!this.head) return null;
  
      let current = this.head;
      do {
        if (current.data === data) {
          return current;
        }
        current = current.next;
      } while (current !== this.head);
  
      return null;
    }
  
    display() {
      if (!this.head) {
        console.log("List is empty");
        return;
      }
  
      let current = this.head;
      let result = [];
      do {
        result.push(current.data);
        current = current.next;
      } while (current !== this.head);
  
      console.log(result.join(' <-> '));
    }
  }
  
  const list = new DoublyCircularLinkedList();
  
  list.insert(1);
  list.insert(2);
  list.insert(3);
  list.insert(4);
  
  console.log("Original list:");
  list.display();
  
  const searchResult = list.search(3);
  console.log("Search result for 3:", searchResult ? "Found" : "Not found");
  
  list.delete(2);
  console.log("List after deleting 2:");
  list.display();
  
  list.insert(5);
  list.insert(6);
  
  console.log("Final list:");
  list.display();