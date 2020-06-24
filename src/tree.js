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

// find minimum element in tree
BinarySearchTree.prototype.findMin = function(root) {
    if (!root) {
        return 'tree is empty';
    }
    while (root.left) {
        root = root.left;
    }
    return root.value;
}

// find maximum element in tree
BinarySearchTree.prototype.findMax = function(root) {
    if (!root) {
        return 'tree is empty';
    }
    while (root.right) {
        root = root.right;
    }
    return root.value;
}

//find height of tree
BinarySearchTree.prototype.findHeight = function(root) {
    if(!root) {
        return -1;
    }
    return Math.max(this.findHeight(root.left), this.findHeight(root.right)) + 1;
}

// height of tree iteratively
BinarySearchTree.prototype.heightOfTree = function(root) {
    if (!root) {
        return null;
    }
    let height = -1;
    let nodeCount = 0;
    let queue = [];
    queue.push(root);
    while (1) {
        nodeCount = queue.length;
        if (nodeCount < 1) {
            return height;
        }

        height++;
        while (nodeCount) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if(node.right) {
                queue.push(node.right);
            }
            nodeCount--;
        }
    }
}
