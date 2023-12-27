import { defaultCompare } from "../util/defaultCompare";
import BinarySearchTree from "./BinarySearchTree";
import { RedBlackNode, Colors } from "../models/binary-search-tree-models";

export class RedBlackTree extends BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    insert(key) {
        if(this.root == null){
            this.root = new RedBlackNode(key);
            this.root.color = Colors.BLACK;
        } else {
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode);
        }
    }

    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node;
                return node.left;
            } else {
                return this.insertNode(node.left, key);
            }
        }
        else if (node.right == null) {
            node.right = new RedBlackNode(key);
            node.right.parent = node;
            return node.right;
        } else {
            return this.insertNode(node.right, key);
        }
    }

    fixTreeProperties() {
        while(node && node.parent && node.parent.isRed() && node.color !== Colors.BLACK) {
            let parent = node.parent;
            const grandParent = parent.parent;
            if (grandParent && grandParent.left === parent) {
                const uncle = grandParent.right;
                if (uncle && uncle.color === Colors.RED) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                } else {
                    //2A
                    if (node === parent.right) {
                        this.rotationRR(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    //3A
                    this.rotationLL(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;
                }
            } else {
                const uncle = grandParent.left;
                if (uncle && uncle.color === Colors.RED) {
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                } else {
                    //2B
                    if (node === parent.left) {
                        this.rotationLL(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    //3B
                    this.rotationRR(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED; 
                    node = parent;
                }
            }
        }
        this.root.color = Colors.BLACK;
    }

    rotationLL(node) {
        const temp = node.left;
        node.left = temp.right;
        if (temp.right && temp.right.key) {
            temp.right.parent = node;
        }
        temp.parent = node.parent;
        if (!node.parent) {
            this.root = temp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = temp;
            } else {
                node.parent.right = temp;
            }
        }
        temp.right = node;
        node.parent = temp;
    }

    rotationRR(node) {
        const temp = node.right;
        node.right = temp.left;
        if (temp.left && temp.left.key) {
            temp.left.parent = node;
        }
        temp.parent = node.parent;
        if (!node.parent) {
            this.root = temp;
        } else {
            if (node === node.parent.left) {
                node.parent.left = temp;
            } else {
                node.parent.right = temp;
            }
        }
        temp.left = node;
        node.parent = temp;
    }
}