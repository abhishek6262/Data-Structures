function LinkedList(value) {
  this.value = value;
  this.next = null;
}

class HashTable {
  #items = [];
  #loadFactor = 7;

  #generateHash(value) {
    if (typeof value === "number") return value % this.#loadFactor;
    else if (typeof value === "string") {
      let res = 0,
        decidingNumber = 33;

      for (let i = 0; i < value.length; i++)
        res += value.charCodeAt(i) * decidingNumber ** i;

      return res % this.#loadFactor;
    }

    return value;
  }

  insert(value) {
    const index = this.#generateHash(value);
    const currentNode = new LinkedList(value);
    let previousNode = this.#items[index];

    if (previousNode) {
      while (previousNode.next) previousNode = previousNode.next;
      previousNode.next = currentNode;
    } else {
      this.#items[index] = currentNode;
    }
  }

  has(value) {
    const index = this.#generateHash(value);
    if (!this.#items[index]) return false;

    let currentNode = this.#items[index];

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }
}

const hashTable = new HashTable();

hashTable.insert("abhishek");
hashTable.insert("prakash");
hashTable.insert("shade");
hashTable.insert(2);
hashTable.insert(3);
hashTable.insert(4);
hashTable.insert(5);

console.log(hashTable.has(3));
console.log(hashTable.has(7));
