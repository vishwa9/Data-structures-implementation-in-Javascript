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

// Breadth first search
BinarySearchTree.prototype.bfs = function() {
	if(!this.root) {
		return null;
	}	
	let queue = [];
	queue.push(this.root);
	while(queue.length) {
		let visited = queue.shift();
		console.log(visited.value);
		if(visited.left) {
			queue.push(visited.left);	
		}
		if(visited.right) {
			queue.push(visited.right);
		}
	}
}

// Depth first search - Preorder
BinarySearchTree.prototype.preorder = function(root) {
    if (!root) {
        return null;
    }
    console.log(root.value);
    this.preorder(root.left);
    this.preorder(root.right);
}

// Depth first search - Inorder
BinarySearchTree.prototype.inorder = function(root) {
    if (!root) {
        return null;
    }
    this.inorder(root.left);
    console.log(root.value);
    this.inorder(root.right);
}

// Depth first search - Postorder
BinarySearchTree.prototype.postorder = function(root) {
    if (!root) {
        return null;
    }
    this.postorder(root.left);
    this.postorder(root.right);
    console.log(root.value);
}

// find bst 
BinarySearchTree.prototype.isBinarySearchTree = function(root) {
    return this.isBstUtil(root, -Infinity, +Infinity);
}

// util to find bst
BinarySearchTree.prototype.isBstUtil = function(root, min, max) {
    if (!root) {
        return true;
    }
    if (root.value > min && root.value < max && this.isBstUtil(root.left, min, root.value) && this.isBstUtil(root.right, root.value, max)) {
        return true;
    } else {
        return false;
    }
}

// Note: you can also perform inorder traversal to find bst

// delete a node in bst
BinarySearchTree.prototype.delete = function(root, value) {
    if (!root) {
        return 'tree is empty';
    }
    if (root.value > value) {
        root.left = this.delete(root.left, value);
    } else if (root.value < value) {
        root.right = this.delete(root.right, value);
    } else {
        if (root.left === null && root.right === null) {
            console.log(root, 'null && null');
            root = null;
        } else if (!root.right) {
            root = root.left;
            console.log(root, 'null && right');
        } else if (!root.left) {
            console.log(root, 'null && left');
            root = root.right;
        } else {
            const node = this.min(root.right);
            root.value = node;
            console.log(root, 'node', node);
            root.right = this.delete(root.right, node);
        }
    }
    return root;
}

// find node in tree
BinarySearchTree.prototype.find = function(root, value) {
    if (!root || !value) {
        return null;
    }
    if (root.value > value) {
        return this.find(root.left, value);
    } else if (root.value < value) {
        return this.find(root.right, value);
    } else {
        return root;
    }
}

// find successor in inorder traversal
BinarySearchTree.prototype.getSuccessor = function(root, data) {
    const current = this.find(root, data);
    if (!current) {
        return null;
    }
    // Case 1: Node has right subtree
    if (current.right) {
        return this.min(current.right);
    }
    // Case 2: Node has no right subtree
    let successor = null;
    let ancestor = root;
    while (ancestor !== current) {
        if (current.value < ancestor.value) {
            successor = ancestor;
            ancestor = ancestor.left;
        } else {
            ancestor = ancestor.right;
        }    
    }
    return successor;
}

// find predecessor in inorder traversal
BinarySearchTree.prototype.getprededecessor =function(root, data) {
    let current = this.find(root, value);
	if(!current) {
		return null;
	}
	// case1: Node has left subTree
	if(current.left) {
		return this.max(current.left);
	}
	//case2: No left subTree
	else {
		let predecessor = null;
		let ancestor = root;
		while(ancestor != current) {
			if(current.value < ancestor.value) {
				ancestor = ancestor.left;
			}else {
				predecessor = ancestor;
				ancestor = ancestor.right;
			}
		}
		return predecessor;
	}
}
