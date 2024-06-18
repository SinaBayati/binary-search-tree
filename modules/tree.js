import { buildTree } from './build-tree.js';
import { Node } from './nodes.js';

export class Tree{
  constructor(array){
    this.root = buildTree(array);
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true){
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(key,root = this.root){
    if(root === null){
      return new Node(key);
    }

    if(key < root.data){
      root.left = this.insert(key,root.left);
    } else {
      root.right = this.insert(key,root.right);
    }

    return root;
  }

  deleteItem(key,root = this.root){
    if(root === null){
      return root;
    }
    // if the key to be removed is bigger than the root node 
    if(key > root.data){
      root.right = this.deleteItem(key,root.right);
    }
    // if the key to be removed is smaller than the root node 
    else if(key < root.data){
      root.left = this.deleteItem(key,root.left);
    }
    // if the key to be removed the root node 
    else {
      if(root.left === null){
        return root.right;
      } else if(root.right === null){
        return root.left;
      }

      const data = this.minValue(root.right);
      root.right = this.deleteItem(data,root.right);
      root.data = data;
    }
    return root;
  }

  minValue(root){
    let minValue = root.data;

    while(root.left !== null){
      minValue = root.left.data;
      root = root.left;
    }

    return minValue;
  }

  find(value,root = this.root){
    if(value < root.data){
      return this.find(value,root.left);
    } else if(value > root.data){
      return this.find(value,root.right);
    } else {
      return root;
    }
  }
}