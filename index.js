import { Tree } from "./modules/tree.js";
import { Node } from "./modules/nodes.js";
import { buildTree } from "./modules/build-tree.js";

const T = new Tree();
console.log(T.message);

const N = new Node("data");
console.log(N.data);

buildTree();