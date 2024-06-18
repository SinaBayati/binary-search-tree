import { Tree } from "./modules/tree.js";

const T = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// T.insert(69);
// T.insert(10000);
// T.deleteItem(67);
T.prettyPrint();
// console.log(T.find(69));

// console.log(T.levelOrder((x) => x.data));
// console.log(T.inOrder((x) => x.data));
// console.log(T.preOrder((x) => x.data));
// console.log(T.postOrder((x) => x.data));
// console.log(T.height());