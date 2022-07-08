class QuadraticProbing {
  #capacity;
  #items = [];

  constructor(capacity) {
    this.#capacity = capacity;
  }

  #hash(item) {
    return item % this.#capacity;
  }

  insert(item) {
    let probe = 2,
      head = this.#hash(item),
      key = head;

    while (this.#items[key]) {
      if (this.#items[key] === -1) break;
      probe = probe ** 2;
      key = (key + probe) % this.#capacity;
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
    let probe = 2,
      head = this.#hash(item),
      key = head;

    while (this.#items[key]) {
      if (this.#items[key] === item) return key;
      probe = probe ** 2;
      key = (key + probe) % this.#capacity;
      if (key === head) return -1;
    }

    return -1;
  }
}

const hashTable = new QuadraticProbing(7);

hashTable.insert(49);
hashTable.insert(56);
hashTable.insert(63);
hashTable.insert(72);

console.log(hashTable.search(56));
hashTable.remove(56);
console.log(hashTable.search(56));
