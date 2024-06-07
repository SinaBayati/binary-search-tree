import { buildTree } from './build-tree.js';

export class Tree{
  constructor(array){
    this.root = buildTree(array);
  }
}