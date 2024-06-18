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

  levelOrder(callback = x => x){
    const result = [];
    const queue = [];
    queue.push(this.root);

    while(queue.length !== 0){
      const currentNode = queue.shift();
      if(currentNode.left !== null){
        queue.push(currentNode.left);
      }
      if(currentNode.right !== null){
        queue.push(currentNode.right);
      }
      const callBackResult = callback(currentNode);
      result.push(callBackResult);
    }

    return result;
  }

  inOrder(callback = x => x,root = this.root){
    return this._inOrderRec(callback,root);
  }

  _inOrderRec(callback,root,result = []){
    if(root !== null){
      this._inOrderRec(callback,root.left,result);
      result.push(callback(root));
      this._inOrderRec(callback,root.right,result);
      return result;
    }
  }

  preOrder(callback = x => x,root = this.root){
    return this._preOrderRec(callback,root);
  }

  _preOrderRec(callback,root,result = []){
    if(root !== null){
      result.push(callback(root));
      this._preOrderRec(callback,root.left,result);
      this._preOrderRec(callback,root.right,result);
      return result;
    }
  }

  postOrder(callback = x => x,root = this.root){
    return this._postOrderRec(callback,root);
  }

  _postOrderRec(callback,root,result = []){
    if(root !== null){
      this._postOrderRec(callback,root.left,result);
      this._postOrderRec(callback,root.right,result);
      result.push(callback(root));
      return result;
    }
  }

  height(root = this.root){
    if(root === null){
      return -1;
    }
    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);
    return Math.max(leftHeight,rightHeight) + 1;
  }

  depth(key,root = this.root){
    let level = 0;

    while(key !== root.data){
      if(key < root.data){
        level += 1;
        root = root.left;
      }
      if(key > root.data){
        level += 1;
        root = root.right;
      }
    }

    return level;
  }

  isBalanced(root = this.root){
    if(root === null){
      return true;
    }

    const heightDiff = Math.abs(
      this.height(root.left) - this.height(root.right)
    );

    return (
      heightDiff <= 1
      && this.isBalanced(root.left)
      && this.isBalanced(root.right)
    );
  }

  rebalance(){

  }
}