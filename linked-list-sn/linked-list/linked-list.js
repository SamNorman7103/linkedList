class LinkedListNode {
  // implement this
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {
  // implement this
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
  insert(value) {
    if (!this.tail) {
      this.head = this.tail = new LinkedListNode(value);
    } else {
      let oldTail = this.tail;
      this.tail = new LinkedListNode(value);
      oldTail.next = this.tail;
      this.tail.previuos = oldTail;
    }
    this.count++;
  }

  remove(value) {
    var currentNode = this.head;
    var prev = null;
    while (currentNode != null) {
      if (currentNode.value === value) {
        if (prev == null) {
          this.head = currentNode.next;
          this.tail = currentNode.next;
        } else {
          prev.next = currentNode.next;
        }
        this.count--;
        return currentNode.value;
      }
      prev = currentNode;
      currentNode = currentNode.next;
    }
    return -1;
  }

  find(value) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }

  size() {
    return this.count;
  }
}

let list = new LinkedList();

list.insert(5);
list.insert(7)
console.log(list)
list.remove(5);
console.log(list);
console.log(list.size())

