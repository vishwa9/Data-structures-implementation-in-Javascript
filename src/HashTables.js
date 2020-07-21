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
    var index = val % 10;
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
let hashTable = Array(10);

function hashFunc(value) {
    return (2 * value + 3);
}

const len = hashTable.length;

function insert(value) {
    const index = hashFunc(value) % len;
    if (!hashTable[index]) {
        hashTable[index] = value;
    } else {
        for (let i = 1; i < len; i++) {
            const newIndex = (index + i) % len;
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
        return 'not in list';
    }
    let index = hashFunc(value) % len;
    if (hashTable[index] === value) {
        return 'found';
    }
    for (let i = 1; i < len; i++) {
        const newIndex = (index + i) % len;
        if (hashTable[newIndex] === value) {
            return 'found';
        }
    }
    return 'not in list';
}

// Quadratic probing

function insert(value) {
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
    const index = hashFunc(value) % len;
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

// Double hashing

function secondHashFunc(value) {
    return Math.pow(value, 3) + 1;
}

function insert(value) {
    const index = hashFunc(value) % len;
    if (!hashTable[index]) {
        hashTable[index] = value;
    } else {
        const hashValue = secondHashFunc(value) % len;
        for (i = 0; i < len; i++) {
            const newIndex = (index + hashValue*i) % len;
            if (!hashTable[newIndex]) {
                hashTable[newIndex] = value;
                return;
            }
        }
        return 'not stored';
    }
}

function search(value) {
    if (!value) {
        return 'not found';
    }
    const index = hashFunc(value) % len;
    if (hashTable[index] === value) {
        return 'found';
    } else {
        const hashValue = secondHashFunc(value) % len;
        for (let i = 0; i < len; i++) {
            const newIndex = (index + hashValue*i) % len;
            if(hashTable[newIndex] === value) {
                return 'found';
            }
        }
        return 'not found';
    }
}

// 20 Hashing technique based questions

// 1) Find whether an array is subset of another array
function isSubSet(first, second) {
    const hashTable = {};
    first.forEach(i => {
        if(!hashTable[i]) {
            hashTable[i] = 1;
        } else {
            hashTable[i]++;
        }
    });
    console.log('hashTable->', hashTable);
    for(let i = 0; i < second.length; i++) {
        if(hashTable[second[i]] > 0) {
            hashTable[second[i]]--;
        } else {
            return 'not a subset';
        }
    }
    console.log('hashTable', hashTable);
    return 'is a subset';
}

// 2) Union and Intersection of two Lists

function union(first, second) {
    let hashTable = {};
    let result = [];
        
    for(let i = 0; i < first.length; i++){
        if (!hashTable[first[i]]) {
            hashTable[first[i]] = true;
            result.push(first[i]);
        }
    }
    for(let j = 0; j < second.length; j++) {
        if (!hashTable[second[j]]) {
            hashTable[second[j]] = true;
            result.push(second[j]);
        }
    }
}

function intersection(first, second) {
    let hashTable = {};
    let result = [];
    for (let i = 0; i < first.length; i++) {
        if (!hashTable[first[i]]) {
            hashTable[first[i]] = true;
        }
    }
    for (let j = 0; j < second.length; j++) {
        if (hashTable[second[j]]) {
            result.push(second[j]);
        }
    }
    return result;
}
