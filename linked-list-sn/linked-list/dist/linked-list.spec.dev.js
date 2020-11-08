"use strict";

describe('Linked List', function () {
  var linkedList;
  beforeEach(function () {
    linkedList = new LinkedList();
  });
  describe('insert', function () {
    it('should contain the number 5 when 5 is inserted', function () {
      linkedList.insert(5);
      expect(linkedList.find(5)).toEqual(true);
    });
    it('should contain the number 5 and 7 when 5 and 7 are inserted', function () {
      linkedList.insert(5);
      linkedList.insert(7);
      expect(linkedList.find(5)).toEqual(true);
      expect(linkedList.find(7)).toEqual(true);
    });
    it('should contain the number 5 and 7 and 13 when 5 and 7 and 13 are inserted', function () {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      expect(linkedList.find(5)).toEqual(true);
      expect(linkedList.find(7)).toEqual(true);
      expect(linkedList.find(13)).toEqual(true);
    });
    it('should have size of 1 when inserting one item', function () {
      linkedList.insert(5);
      expect(linkedList.size()).toEqual(1);
    });
  });
  describe('remove', function () {
    it('should not contain the number 5 when 5 is inserted and then removed', function () {
      linkedList.insert(5);
      expect(linkedList.find(5)).toEqual(true);
      linkedList.remove(5);
      expect(linkedList.find(5)).toEqual(false);
    });
    it('should not contain the number 7 when 5, 7 and 13 are inserted and then 7 is removed', function () {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      linkedList.remove(7);
      expect(linkedList.find(5)).toEqual(true);
      expect(linkedList.find(7)).toEqual(false);
      expect(linkedList.find(13)).toEqual(true);
    });
    it('should decrease the size when an item is removed', function () {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      expect(linkedList.size()).toEqual(3);
      linkedList.remove(7);
      expect(linkedList.size()).toEqual(2);
    });
    it('should have size of 0 when inserting one item and then removing one item', function () {
      linkedList.insert(5);
      expect(linkedList.size()).toEqual(1);
      linkedList.remove();
      expect(linkedList.size()).toEqual(0);
    });
  });
  describe('size', function () {
    it('should be 5 when 5 items are inserted', function () {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      linkedList.insert(3);
      linkedList.insert(27);
      expect(linkedList.size()).toEqual(5);
    });
    it('should be 3 when 5 items are inserted but then 2 are removed', function () {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      linkedList.insert(3);
      linkedList.insert(27);
      expect(linkedList.size()).toEqual(5);
      linkedList.remove(13);
      linkedList.remove(7);
      expect(linkedList.size()).toEqual(3);
    });
    it('should have size of 0 when nothing has been inserted', function () {
      expect(linkedList.size()).toEqual(0);
    });
  });
  describe('find', function () {
    it('should find the number 5 when 5 is inserted', function () {
      linkedList.insert(5);
      expect(linkedList.find(5)).toEqual(true);
    });
    it('should find the number 5 and 7 when 5 and 7 are inserted', function () {
      linkedList.insert(5);
      linkedList.insert(7);
      expect(linkedList.find(5)).toEqual(true);
      expect(linkedList.find(7)).toEqual(true);
    });
    it('should find the number 5, 7 and 13 when they are inserted', function () {
      linkedList.insert(5);
      linkedList.insert(7);
      linkedList.insert(13);
      expect(linkedList.find(5)).toEqual(true);
      expect(linkedList.find(7)).toEqual(true);
      expect(linkedList.find(13)).toEqual(true);
    });
  });
});