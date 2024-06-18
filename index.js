import { Tree } from "./modules/tree.js";

// driver script
const binaryTree = new Tree([1,10,24,38,41,55,69,73,88,96]);

console.log(binaryTree.isBalanced());

console.log(binaryTree.levelOrder());
console.log(binaryTree.preOrder());
console.log(binaryTree.postOrder());
console.log(binaryTree.inOrder());

binaryTree.insert(104);
binaryTree.insert(420);
binaryTree.insert(1001);

console.log(binaryTree.isBalanced());

binaryTree.rebalance();

console.log(binaryTree.isBalanced());

console.log(binaryTree.levelOrder());
console.log(binaryTree.preOrder());
console.log(binaryTree.postOrder());
console.log(binaryTree.inOrder());
