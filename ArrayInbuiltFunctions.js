//Array Functions
let originalArray = ["Banana", "Orange", "Apple", "Mango"];
let arrayToString = originalArray.toString();
console.log("arrayToString",arrayToString);
let shiftedArray = originalArray.shift();
console.log("shiftedArray",shiftedArray);
let arrayAt = originalArray.at(2);
console.log("arrayAt",arrayAt);
let unshiftArray = originalArray.unshift("Grapes"); // unshift() returns new array length
console.log("unshiftedArray",unshiftArray);
let secondArray = ["Tomato", "Potato", "Onion", "Brinjal"];
let mergedArray = originalArray.concat(secondArray);
console.log("merged array",mergedArray);
let spliced = originalArray.toSpliced(3, 1);
console.log("splicedArray",spliced);
let sliceArray = originalArray.slice(3);
console.log("slice Array",sliceArray); //slice method slices out a piece of an array into a new array
console.log("original array",originalArray);





