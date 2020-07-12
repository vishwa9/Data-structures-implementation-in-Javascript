/*HashFunctions
1) The division method
    h(k) = k mod m
    For example: hash table size is m = 12 and the key is k = 100
    then h(k) = 4
    For example: hash table size is 2000 then we could choose m to be a prime number near
    2000/3 which would be 701 so m = 701
    and hash function would be h(k) = k mod 701

2) The  multiplication method
    first step -> multiply the key by a constant A in the range 0 < A < 1
    second step -> multiply the above result by m size of hash table and take floor
    h(k) = Math.floor(m (k * A mod 1))
*/

// implementation of hash tables with separate chaining (open hashing)
let hashTable = Array(10);

function insert(val) {
    const index = val % 10;
    if (!hashTable[index]) {
        hashTable[index] = [{
            value: val
        }];
    } else {
        hashTable.push({
            value: val
        });
    }
}

function search(val) {
    var index = val % 7;
    if (Array.isArray(hashTable[index])) {
        const list = hashTable[index];
        for (let i in list) {
            if (list[i].value === val) {
                return true;
            }
        }
        return 'not in list';
    } else {
        return 'not in list';
    }
}

// open addressing 
// Linear Probing
let hashTable = Array(7);

function insert(value) {
    let count = 0;
    let index = value % hashTable.length;
    const obj = {};
    obj.key = value;
    if (!hashTable[index]) {
        hashTable[index] = obj;
    } else {
        while (hashTable[index]) {
            count++;
            index++;
            if (count > hashTable.length) {
                return 'array is full';
            }
            if (index === hashTable.length) {
                index = 0;
            }
        }
        hashTable[index] = obj;
    }
}

function search(value) {
    if (!value) {
        return 'not in list';
    }
    let index = value % hashTable.length;
    let count = 1;
    if (hashTable[index].key === value) {
        return 'found';
    }
    while (count < hashTable.length) {
        index++;
        if (index === hashTable.length) {
            index = 0;
        }
        if (hashTable[index].key === value) {
            return 'found';
        }
        count++;
    }
    return 'not in list';
}

// Quadratic probing
let hashTable = Array(10);

function hashFunc(value) {
    return (2 * value + 3);
}

function insert(value) {
    const len = hashTable.length;
    const index = hashFunc(value) % len;
    if (!hashTable[index]) {
        hashTable[index] = value;
    } else {
        for (let i = 1; i < len; i++) {
            const newIndex = (index + Math.pow(i, 2)) % len;
            if (!hashTable[newIndex]) {
                hashTable[newIndex] = value;
                return;
            }
        }
        return 'list is full';
    }
}

function search(value) {
    if (!value) {
        return;
    }
    let len = hashTable.length;
    let index = hashFunc(value) % len;
    if (hashTable[index] === value) {
        return "found";
    } else {
        for (let i = 1; i < len; i++) {
            const newIndex = (index + Math.pow(i, 2)) % len;
            if (hashTable[newIndex] === value) {
                return "found";
            }
        }
        return "not found";
    }
}