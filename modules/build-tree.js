import { Node } from "./nodes.js";

export function buildTree(array){
  const uniqueArr = removeDuplicates(array);
  const sortedArr = mergeSort(uniqueArr);

  const tree = arrayToBST(sortedArr,0,sortedArr.length - 1);
  return tree;
}

function arrayToBST(array,start,end){
  if(start > end){
    return null;
  }

  const midIndex = Math.floor((start + end) / 2);
  const node = new Node(array[midIndex]);

  node.left = arrayToBST(array,start,midIndex - 1);
  node.right = arrayToBST(array,midIndex + 1,end);
  
  return node;
}

function removeDuplicates(array){
  return Array.from(new Set(array))
}

function mergeSort(array){
  if (array.length <= 1) return array;

  const midIndex = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0,midIndex));
  const rightHalf = mergeSort(array.slice(midIndex));
  return merge(leftHalf,rightHalf);
}

function merge(leftHalf,rightHalf){
  const result = [];

  while (leftHalf.length > 0 && rightHalf.length > 0) {
    const arrayWithSmallerElem = leftHalf[0] < rightHalf[0] ? leftHalf : rightHalf;
    const smallerElem = arrayWithSmallerElem.shift();
    result.push(smallerElem);
  }

  return result.concat(leftHalf,rightHalf);
}