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
}