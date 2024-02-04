const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(numBuckets).fill(null)
  }

  hash(key) {
    const crypt = sha256(key);
    return parseInt(crypt.slice(0, 8), 16);
  }

  hashMod(key) {
    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    let index = this.hashMod(key);
    if (this.data[index]) throw Error('hash collision or same key/value pair already exists!');
    this.data[index] = new KeyValuePair(key, value);
    this.count++;
  }

  insertWithHashCollisions(key, value) {
    let index = this.hashMod(key);
    if (this.data[index]) {
      const pair = new KeyValuePair(key, value);
      pair.next = this.data[index];
      this.data[index] = pair;
      this.count++;
    }
    else this.insertNoCollisions(key, value);
  }

  checkForKeys(key, value) {
    for (let pair of this.data) {
      if (pair) {
        // if pair exists, check for key

        while (pair) {
          if (pair.key === key) {
            pair.value = value
            return true
          };

          // if key does not exist, check for a linked list;
          pair = pair.next;
        };
      };

    };
    return false;
  }

  insert(key, value) {
    let keyExists = this.checkForKeys(key, value);

    if (!keyExists) {
      this.insertWithHashCollisions(key, value);
    }
  };

}


module.exports = HashTable;
