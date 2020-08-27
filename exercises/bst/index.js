// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(value, root = this){
        if(value < root.data){
            if (root.left){
                this.insert(value, root.left);
            }else{
                root.left = new Node(value);
            }
        } else if (value > root.data){
            if (root.right){
                this.insert(value, root.right);
            }else{
                root.right = new Node(value);
            }
        }
    }

    contains(value){
        let root = this;

        while(root){
            if(root.data == value){
                return root;
            } else if(root.data > value){
                root = root.left;
            } else {
                root = root.right;
            }
        }

        return null;
    }
}

module.exports = Node;
