class LinearProbing {
  #capacity;
  #items = [];

  constructor(capacity) {
    this.#capacity = capacity;
  }

  #hash(item) {
    return item % this.#capacity;
  }

  insert(item) {
    let head = this.#hash(item),
      key = head;

    while (this.#items[key]) {
      if (this.#items[key] === -1) break;
      key = (key + 1) % this.#capacity;
      if (key === head) throw new Error("Table is full");
    }

    this.#items[key] = item;
  }

  remove(item) {
    if (this.#items.length === 0) throw new Error("Table is empty");
    const key = this.search(item);
    if (key === -1) throw new Error(`The item [${item}] does not exist.`);
    this.#items[key] = -1;
  }

  search(item) {
    let head = this.#hash(item),
      key = head;

    while (this.#items[key]) {
      if (this.#items[key] === item) return key;
      key = (key + 1) % this.#capacity;
      if (key === head) return -1;
    }

    return -1;
  }
}

const hashTable = new LinearProbing(7);

hashTable.insert(49);
hashTable.insert(56);
hashTable.insert(72);

console.log(hashTable.search(56));
hashTable.remove(56);
console.log(hashTable.search(56));
