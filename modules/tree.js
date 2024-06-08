import { buildTree } from './build-tree.js';
import { Node } from './nodes.js';

export class Tree{
  constructor(array){
    this.root = buildTree(array);
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
}