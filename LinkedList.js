//node initialized
function LinkedList() {
    this.head = null;
}

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
}