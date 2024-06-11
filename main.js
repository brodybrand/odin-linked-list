const createNode = (value = null, nextNode = null) => {
  return { value, nextNode };
};

const LinkedList = () => {
  // head node, created manually to initialize list with at least one reference point
  let headNode = createNode();

  // adds a new node containing value to the end of the list
  const append = (value) => {
    let currentNode = headNode;
    // if head is only node, replace with first added item
    if (!currentNode.value) {
      currentNode.value = value;
      return;
    }
    tail().nextNode = createNode(value);
  };

  // adds a new node containing value to the start of the list
  const prepend = (value) => {
    // if head is only node, replace with first added item
    let currentNode = headNode;
    if (!currentNode.value) {
      currentNode.value = value;
      return;
    }
    headNode = createNode(value, headNode);
  };

  // returns the total number of nodes in the list
  const size = () => {
    // counter init at 1 to account for last node where nextNode === null
    let counter = 1;
    currentNode = headNode;
    while (currentNode.nextNode !== null) {
      counter += 1;
      currentNode = currentNode.nextNode;
    }
    return counter;
  };
  // returns the first node in the list
  const head = () => {
    return at(0);
  };
  // returns the last node in the list
  const tail = () => {
    // size - 1 => index of last node
    return at(size() - 1);
  };
  // returns the node at the given index
  const at = (index) => {
    if (index > size()) {
      alert(`Node does not exist at index: ${index}`);
      return;
    }

    let currentNode = headNode;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  };
  // removes the last element from the list
  const pop = () => {
    let newTail = at(size() - 2);
    return (newTail.nextNode = null);
  };
  // returns true if the passed in value is in the list and otherwise returns false.
  const contains = (value) => {
    let contained = false;
    let currentNode = headNode;
    for (let i = 0; i < size(); i++) {
      if (currentNode.value === value) {
        console.log(`"${value}" exists at node ${i + 1}.`);
        contained = true;
        return;
      } else {
        currentNode = currentNode.nextNode;
      }
    }
    if (!contained) {
      console.log(`"${value}" does not exist in list`);
      return contained;
    } else {
      return contained;
    }
  };
  // returns the index of the node containing value, or null if not found.
  const find = (value) => {
    return contains(value);
  };
  // represents your LinkedList objects as strings,
  // so you can print them out and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  const toString = () => {
    let currentNode = headNode;
    let string = "";

    while (currentNode.nextNode !== null) {
      string += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.nextNode;
    }
    // need to account for last node where currentNode.nextNode === null
    string += `( ${currentNode.value} ) -> null`;
    return string;
  };

  // TODO
  // inserts a new node with the provided value at the given index.
  // const insertAt = (value, index) => {};
  //  removes the node at the given index
  // const removeAt = (index) => {};

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

let list = LinkedList();

list.append("B");
list.append("C");
list.append("D");

list.prepend("A");

list.pop();

console.log(list.toString());

console.log(`Head: ${list.head().value}`);
console.log(`Tail: ${list.tail().value}`);

console.log(`Size: ${list.size()}`);

list.contains("A");
list.contains("B");
list.contains("C");
list.contains("D");

list.find("B");
