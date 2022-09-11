/**
 * The following implements a quick sort algorithm 
 * based on: https://www.youtube.com/watch?v=0SkOjNaO1XY
 * by Safwaan Taher
 */
"use strict";
const ps = require('prompt-sync');
const prompt = ps();

/**
 * @param {Array} arr the array 
 * @param {Number} i the first swap index
 * @param {Number} j the second swap index
 */
const swap = (arr, i, j) => {
   [arr[i], arr[j]] = [arr[j], arr[i]];
}

/**
 * @param {Array} arr the array given by the QuickSort method
 * @param {Number} l the left bound
 * @param {Number} r the right bound
 * @returns the pivot index
 */
const partition = (arr, l, r) => {
   // set pivot to last element
   let pivot = arr[r];
   // the left pointer will be i, right pointer will be j
   // set i to one minus left bound, aka just outside the left bound
   // set j to the left bound, aka one past i
   let i = l - 1, j = l;
   // iterate the right pointer j up until the pivot
   for(; j < r - 1; j++) {
      // we have found a number less than the pivot
      if(arr[j] < pivot) {
         // move i to position to swap
         i++;
         // swap the values of the right and left pointers
         swap(arr, i, j);
      }
   }
   // swap the element just to the right of i with the pivot, 
   // placing the pivot in a location such that all values to the left
   // are smaller and all values to the right are larger
   swap(arr, i + 1, r);
   // return location of the pivot
   return i + 1;
}


/**
 * @param {Array} arr the array to be sorted
 * @param {number} l the left bound
 * @param {number} r the right bound
 */
const quickSort = (arr, l, r) => {
   // index out of bounds
   if(l >= r) {
      return;
   }
   // find the pivot index for the array and partition it
   let p = partition(arr, l, r);
   // recursive call for quicksort 

   // quicksorting the left half
   quickSort(arr, l, p - 1);
   // quicksorting the right half
   quickSort(arr, p + 1, r);
}


let input = prompt('Enter values for an array seperated by a comma and no spaces: ');
let arr = input.split(",").map(cur => Number(cur));
console.log("Your array:");
console.log(arr);
quickSort(arr, 0, arr.length - 1);
console.log("Sorted Array:");
console.log(arr);