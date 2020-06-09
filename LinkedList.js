//node initialized
function LinkedList() {
    this.head = null;
}

// add node to linked list
LinkedList.prototype.push = function(val) {
    const node = {
        value: val,
        next: null
    };
    if (!this.head) {
        this.head = node;
    } else {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }
}

// remove node from linked list
LinkedList.prototype.remove = function(val) {
    let current = this.head;
    
    if (current.value === val) {
        this.head = current.next;
    } else {
        let previous = current;
        current = current.next;
        while (current.next) {
            if (current.value === val) {
                previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next;
        }
        if (current.value === val) {
            previous.next = null;
        }
    }
}

// reverse the linked list
LinkedList.prototype.reverse = function () {
    let current = this.head;
    let temp = current.next;
    let previous = null;
    while (current) {
        current.next = previous;
        previous = current;
        current = temp;
        if (temp) {
            temp = temp.next;
        }
    }
    this.head = previous;
}

// find nth node from last
LinkedList.prototype.nthNodeFromEnd = function(n) {
    let current = this.head;
    let temp = current;
    let i = 1;
    if(n < 1) {
        return 'list length should be greater than 0';
    }
    while (i <= n) {
        if(!temp) {
            return 'list length is smaller than given number';
        }
        temp = temp.next;
        i++;
    }
    while(temp) {
        current = current.next;
        temp = temp.next;
    }
    return current.value;
}

// delete nth from last
LinkedList.prototype.deleteNthNodeFromEnd = function(n) {
    let current = this.head;
    let previous = current;
    let temp = current;
    let flag = true;
    let i = 1;
    if(n < 1) {
        return 'list length should be greater than 0';
    }
    while (i <= n) {
        if(!temp) {
            return 'list length is smaller than given number';
        }
        temp = temp.next;
        i++;
    }
    while(temp) {
        if (flag) {
            flag = !flag;
        } else {
            previous = previous.next;
        }
        current = current.next;
        temp = temp.next;
    }
    if (previous.value === current.value) {
        this.head = current.next;
    } else if (n === 1) {
        previous.next = null;
    } else {
        previous.next = current.next;
    }
}

// detect a loop
LinkedList.prototype.detectALoop = function() {
    if(!this.head || !this.head.next) {
        return false;
    }
    let slow = this.head;
    let fast = this.head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow && fast && slow.value === fast.value) {
            return true;
        }
    }
    return false;
}

//ES6 implementation

class LinkedList {
    constructor() {
        this.head = null;
    }
    push(val) {
        const node = {
            value: val,
            next: null
        };
        if(!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }
    
    remove(val) {
        let current = this.head;
        if (current.value === val) {
            current = current.next;
        } else {
            let previous = current;
            current = current.next;
            while (current.next) {
                if (current.value === val) {
                    previous.next = current.next;
                    return;
                }
                previous = current;
                current = current.next;
            }
            if (current.value === val) {
                previous.next = null;
            }
        }
    }

    reverse() {
        let current = this.head;
        let temp = current.next;
        let previous = null;
        while (current) {
            current.next = previous;
            previous = current;
            current = temp;
            if (temp) {
                temp = temp.next;
            }
        }
        this.head = previous;
    }

    nthNodeFromEnd(n) {
        let current = this.head;
        let temp = current;
        let i = 1;
        if(n < 1) {
            return 'list length should be greater than 0';
        }
        while (i <= n) {
            if(!temp) {
                return 'list length is smaller than given number';
            }
            temp = temp.next;
            i++;
        }
        while(temp) {
            current = current.next;
            temp = temp.next;
        }
        return current.value;
    }

    deleteNthNodeFromEnd(n) {
        let current = this.head;
        let previous = current;
        let temp = current;
        let flag = true;
        let i = 1;
        if(n < 1) {
            return 'list length should be greater than 0';
        }
        while (i <= n) {
            if(!temp) {
                return 'list length is smaller than given number';
            }
            temp = temp.next;
            i++;
        }
        while(temp) {
            if (flag) {
                flag = !flag;
            } else {
                previous = previous.next;
            }
            current = current.next;
            temp = temp.next;
        }
        if (previous.value === current.value) {
            this.head = current.next;
        } else if (n === 1) {
            previous.next = null;
        } else {
            previous.next = current.next;
        }
    }

    detectALoop() {
        if(!this.head || !this.head.next) {
            return false;
        }
        let slow = this.head;
        let fast = this.head;
        while (slow && fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow && fast && slow.value === fast.value) {
                return true;
            }
        }
        return false;
    }
}