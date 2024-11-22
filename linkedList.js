import { Node } from './node.js';

export const LinkedList = () => {
  let listHead = null;
  let listTail = null;
  let length = 0;

  const append = (val) => {
    const newNode = Node(val);

    if (!listHead) {
      listHead = newNode;
      listTail = newNode;
    } else {
      listTail.nextNode = newNode;
      listTail = newNode;
    }

    length++;
  };

  const prepend = (val) => {
    const newNode = Node(val);

    if (!listHead) {
      listHead = newNode;
      listTail = newNode;
    } else {
      newNode.nextNode = listHead;
      listHead = newNode;
    }

    length++;
  };

  const size = () => length;

  const head = () => listHead;

  const tail = () => listTail;

  const toString = () => {
    let res = '';
    let currentNode = listHead;

    while (currentNode) {
      res += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }

    res += 'null';
    return res;
  };

  const at = (idx) => {
    if (idx < 0 || idx >= length) return null;
    let currentNode = listHead;
    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  };

  const pop = () => {
    if (!head) return null; // list is empty

    if (length === 1) {
      const removedNode = listHead;
      listHead = null;
      listTail = null;
      length--;
      return removedNode;
    }

    let currentNode = listHead;
    while (currentNode.nextNode && currentNode.nextNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    const removedNode = currentNode.nextNode;
    currentNode.nextNode = null;
    listTail = currentNode;
    length--;

    return removedNode;
  };

  const contains = (val) => {
    let currentNode = listHead;
    while (currentNode) {
      if (currentNode.value === val) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  };

  const find = (val) => {
    let currentNode = listHead;
    let idx = 0;
    while (currentNode) {
      if (currentNode.value === val) {
        return idx;
      }
      currentNode = currentNode.nextNode;
      idx++;
    }
    return null;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    toString,
    at,
    pop,
    contains,
    find,
  };
};
