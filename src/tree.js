// tree node
function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

// push node in binary search tree
BinarySearchTree.prototype.push = function(val) {
    if (!this.root) {
        this.root = new Node(val);
        return;
    }
    let current = this.root;
    const node = new Node(val);
    while (current) {
        if (current.value > val) {
            if (!current.left) {
                current.left = node;
                return;
            }
                current = current.left;
        } else {
            if (!current.right) {
                current.right = node;
                return
            }
                current = current.right;
        }
    }
}