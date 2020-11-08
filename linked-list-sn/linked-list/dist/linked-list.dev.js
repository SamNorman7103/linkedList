"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkedListNode = // implement this
function LinkedListNode(value) {
  _classCallCheck(this, LinkedListNode);

  this.value = value;
  this.next = null;
  this.previous = null;
};

var LinkedList =
/*#__PURE__*/
function () {
  // implement this
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  _createClass(LinkedList, [{
    key: "insert",
    value: function insert(value) {
      if (!this.tail) {
        this.head = this.tail = new LinkedListNode(value);
      } else {
        var oldTail = this.tail;
        this.tail = new LinkedListNode(value);
        oldTail.next = this.tail;
        this.tail.previuos = oldTail;
      }

      this.count++;
    }
  }, {
    key: "remove",
    value: function remove(value) {
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
  }, {
    key: "find",
    value: function find(value) {
      var currentNode = this.head;

      while (currentNode) {
        if (currentNode.value === value) {
          return true;
        }

        currentNode = currentNode.next;
      }

      return false;
    }
  }, {
    key: "size",
    value: function size() {
      return this.count;
    }
  }]);

  return LinkedList;
}();

var list = new LinkedList();
list.insert(5);
list.insert(7);
console.log(list);
list.remove(5);
console.log(list);
console.log(list.size());